import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
    // try {
    //     const result = await signInWithPopup(FirebaseAuth, googleProvider)

    //     const { displayName, email, photoURL, uid } = result.user

    //     return uid

    // } catch (e) {
    //     alert((e as Error).message)
    // }

    signInWithPopup(FirebaseAuth, googleProvider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}



interface PropsRegister { email: string, password: string }

export const signInWithCredentials = async ({ email, password }: PropsRegister) => {

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

export const onAuthStateHasChanged = (setSession: StateDispatch) => {
    onAuthStateChanged(FirebaseAuth, user => {
        console.log(user)
        if (!user) return setSession({ status: 'no-authenticated', userId: null })

        setSession({ status: 'authenticated', userId: user!.uid })

    })
}

export const logoutFirebase = async () => await FirebaseAuth.signOut()