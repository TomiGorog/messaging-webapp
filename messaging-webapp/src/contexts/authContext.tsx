import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginWithCredentials, logoutFirebase, onAuthStateHasChanged, signInWithCredentials } from "../services/authservice"

export interface AuthStateContext {
    userId: string | null
    status: 'checking' | 'authenticated' | 'no-authenticated'
    handleLoginWithCredentials: (password: string, email: string) => Promise<boolean>
    handleRegisterWithCredentials: (password: string, email: string) => Promise<boolean>
    handleLogOut: () => Promise<void>
}

const initialState: Pick<AuthStateContext, 'status' | 'userId'> = {
    status: 'checking',
    userId: null
}

export const AuthContext = createContext({} as AuthStateContext)

interface IElement { children: JSX.Element | JSX.Element[] }

export const AuthProvider = ({ children }: IElement) => {
    const [session, setSession] = useState(initialState)
    // const navigate = useNavigate()
    useEffect(() => {
        onAuthStateHasChanged(setSession)
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
        const userId = await signInWithCredentials({ email, password })
        return validateAuth(userId)
    }

    return (
        <AuthContext.Provider value={{
            ...session,
            handleLoginWithCredentials,
            handleRegisterWithCredentials,
            handleLogOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

