import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { async } from 'rxjs';

interface PropsRegister { email: string, password: string }

export const signUpWithCredentials = async ({ email, password }: PropsRegister) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        return resp.user.uid

    } catch (e) {
        alert((e as Error).message)
    }

}

export const loginWithCredentials = async ({ email, password }: PropsRegister) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        return resp.user.uid

    } catch (e) {
        alert((e as Error).message)
    }
}

// type StateDispatch = React.Dispatch<React.SetStateAction<Pick<AuthStateContext, "status" | "userId">>>
type StateDispatch = any

export const onAuthStateHasChanged = async (setSession: StateDispatch, setLoggedIn: StateDispatch) => {
    onAuthStateChanged(FirebaseAuth, user => {
        if (!user) {
            setLoggedIn(false)
            return setSession({ status: 'no-authenticated', userId: null })
        }

        setSession({ status: 'authenticated', userId: user!.uid })
        setLoggedIn(true)
        console.log(user, "authenticated")

    })
}

export const logoutFirebase = async () => await FirebaseAuth.signOut()