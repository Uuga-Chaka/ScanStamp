import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

export const signUpUser = ({ email, password }: { email: string; password: string }) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => console.log('Success'))
    .catch((err: FirebaseAuthTypes.NativeFirebaseAuthError) => {
      if (err.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!')
      } else if (err.code === 'auth/invalid-email') {
        console.log('That email address is invalid!')
      } else console.error(err)
    })
}

export const loginUser = ({ email, password }: { email: string; password: string }) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((e) => console.log(e))
    .catch((err: FirebaseAuthTypes.NativeFirebaseAuthError) => {
      console.error(err.code)
    })
}

export const signOut = () => {
  auth()
    .signOut()
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
}
