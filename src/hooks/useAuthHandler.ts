import { useCallback, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { signOut } from '../../services/auth'
import { useAuthStore } from '../store'

export const useAuthHandler = () => {
  const [initialazing, setInitialazing] = useState(true)
  const currentUser = useAuthStore((authStore) => authStore.currentUser)
  const setCurrentUser = useAuthStore((authStore) => authStore.updateCurrentUser)

  const onAuthStateChanged = useCallback((user: FirebaseAuthTypes.User | null) => {
    if (user) {
      user
        .getIdTokenResult(true)
        .then(({ claims }) => {
          setCurrentUser({ ...user, verified: claims.verified as boolean })
        })
        .catch((err) => {
          console.log(err)
          signOut()
        })
    } else {
      setCurrentUser(null)
    }
    if (initialazing) setInitialazing(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { initialazing, currentUser }
}
