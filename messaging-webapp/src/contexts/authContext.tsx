import { createContext, useEffect, useState } from "react"
import { loginWithCredentials, logoutFirebase, onAuthStateHasChanged, signUpWithCredentials } from "../services/authservice"
import { savedArticleCorrect, savedArticleStructure } from "../interfaces"
import { set, ref } from "firebase/database"
import { UUID } from "uuidjs"
import { database } from "../firebase/config"

export interface AuthStateContext {
    userId: string | null
    status: 'checking' | 'authenticated' | 'no-authenticated'
    handleLoginWithCredentials: (password: string, email: string) => Promise<boolean>
    handleRegisterWithCredentials: (password: string, email: string) => Promise<boolean>
    handleLogOut: () => Promise<void>
    savedArticles: savedArticleCorrect[],
    saveArticle: (article: savedArticleStructure) => Promise<void>
    deleteFromSavedArticles: (userId: string | null, articleId: string) => Promise<void>
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
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        (async () => {
            await onAuthStateHasChanged(setSession, setLoggedIn)
            fetch(`${import.meta.env.VITE_DATABASEURL}/users/${session.userId}/savedArticles.json`)
                .then(resp => resp.json())
                .then(articles => {
                    let articleArray: savedArticleCorrect[] = []
                    articles && Object.keys(articles).forEach((article: string) => {
                        articleArray.push({ [article]: { ...articles[article] } })
                    });
                    setSavedArticles(articleArray)
                })
        })()

        return () => { }
    }, [loggedIn])



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

    const saveArticle = async ({ title, link, image, }: savedArticleStructure) => {

        let articleID = UUID.genV4();
        let aId = articleID.hexNoDelim
        let articleToSave = { [aId]: { title, link, image } }
        setSavedArticles(prev => [...prev, articleToSave])
        return await set(ref(database, `users/${session.userId}/savedArticles/${articleID}`), {
            title: title,
            link: link,
            image: image
        })
    }

    const deleteFromSavedArticles = async (userId: string | null, articleId: string) => {
        setSavedArticles(prev => [...prev.filter(a => a[articleId] == null)])
        return await fetch(`${import.meta.env.VITE_DATABASEURL}/users/${userId}/savedArticles/${articleId}.json`, {
            method: "DELETE"
        }).then(resp => {
            console.log(resp)
        })
    }
    return (
        <AuthContext.Provider value={{
            ...session,
            handleLoginWithCredentials,
            handleRegisterWithCredentials,
            handleLogOut,
            savedArticles,
            saveArticle,
            deleteFromSavedArticles
        }}>
            {children}
        </AuthContext.Provider>
    )
}

