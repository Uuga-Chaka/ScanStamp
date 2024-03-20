import { useCallback, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { signOut } from '../../services/auth'
import { useAuthStore } from '../store'

import api from '../../services/api'
import { UserData } from '../constants/types'

export const useAuthHandler = () => {
  const [initialazing, setInitialazing] = useState(true)
  const currentUser = useAuthStore((authStore) => authStore.currentUser)
  const setCurrentUser = useAuthStore((authStore) => authStore.updateCurrentUser)

  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        api
          .get<UserData>(`admin/${user.uid}`)
          .then((userData) => setCurrentUser(userData))
          .catch(() => signOut())
      } else {
        setCurrentUser(null)
      }
      if (initialazing) setInitialazing(false)
    },
    [initialazing, setCurrentUser]
  )

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { initialazing, currentUser }
}
