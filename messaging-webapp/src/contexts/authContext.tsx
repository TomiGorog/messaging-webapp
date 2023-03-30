import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginWithCredentials, logoutFirebase, onAuthStateHasChanged, signUpWithCredentials } from "../services/authservice"
import { savedArticleCorrect, savedArticleStructure } from "../interfaces"
import { set, ref } from "firebase/database"
import { UUID } from "uuidjs"
import { database } from "../firebase/config"
import { fetchSavedArticles } from "../services/fetchService"
export interface AuthStateContext {
    userId: string | null
    status: 'checking' | 'authenticated' | 'no-authenticated'
    handleLoginWithCredentials: (password: string, email: string) => Promise<boolean>
    handleRegisterWithCredentials: (password: string, email: string) => Promise<boolean>
    handleLogOut: () => Promise<void>
    savedArticles: savedArticleCorrect[],
    saveArticleContext: (article: savedArticleStructure) => Promise<void>
}

const initialState: Pick<AuthStateContext, 'status' | 'userId'> = {
    status: 'checking',
    userId: null
}


const savedArticlesInitial: savedArticleCorrect[] = []

export const AuthContext = createContext({} as AuthStateContext)

interface IElement { children: JSX.Element | JSX.Element[] }

export const AuthProvider = ({ children }: IElement) => {
    const [session, setSession] = useState(initialState)
    const [savedArticles, setSavedArticles] = useState(savedArticlesInitial)
    // const navigate = useNavigate()
    useEffect(() => {

        onAuthStateHasChanged(setSession)
        fetch(`${import.meta.env.VITE_DATABASEURL}/users/${initialState.userId}/savedArticles.json`)
            .then(resp => resp.json())
            .then(articles => {
                console.log(articles)
                let articleArray: savedArticleStructure[] = []
                articles && Object.keys(articles).forEach((article: string) => {
                    console.log(articles[article])
                    articleArray.push({ articleId: article, ...articles[article] })
                });
                console.log(articleArray, "articleArray")
                return articleArray
            })
    }, [])



    const handleLogOut = async () => {
        logoutFirebase()
        setSession({ userId: null, status: 'no-authenticated' })
    }

    const validateAuth = (userId: string | undefined | void): boolean => {
        if (userId) {
            setSession({ userId, status: 'authenticated' })
            return true
        }
        else {
            setSession({ status: 'no-authenticated', userId: null })
            handleLogOut()
            return false
        }
    }

    const checking = () => setSession(prev => ({ ...prev, status: 'checking' }))



    const handleLoginWithCredentials = async (password: string, email: string): Promise<boolean> => {
        checking()
        const userId = await loginWithCredentials({ email, password })
        return validateAuth(userId)
    }

    const handleRegisterWithCredentials = async (password: string, email: string): Promise<boolean> => {
        checking()
        const userId = await signUpWithCredentials({ email, password })
        return validateAuth(userId)
    }

    const saveArticleContext = async ({ title, link, image, userId }: savedArticleStructure) => {
        let articleID = UUID.genV4();
        savedArticles.push({
            articleID: {
                title: title,
                link: link,
                image: image
            }
        }
        )
        console.log(savedArticles)
        await set(ref(database, `users/${userId}/savedArticles/${articleID}`), {
            title: title,
            link: link,
            image: image
        })


    }
    return (
        <AuthContext.Provider value={{
            ...session,
            handleLoginWithCredentials,
            handleRegisterWithCredentials,
            handleLogOut,
            savedArticles,
            saveArticleContext,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

