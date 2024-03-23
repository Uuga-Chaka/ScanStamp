import { useCallback, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import toast from 'react-hot-toast/headless'

import { useAuthStore } from '../store'
import { errMsg } from '../../localization/EN'

export const useAuthHandler = () => {
  const [initialazing, setInitialazing] = useState(true)
  const currentUser = useAuthStore((authStore) => authStore.currentUser)
  const setCurrentUser = useAuthStore((authStore) => authStore.updateCurrentUser)

  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        user
          .getIdTokenResult(true)
          .then(({ claims }) => {
            setCurrentUser({ ...user, validated: claims.validated as boolean })
            if (initialazing) setInitialazing(false)
          })
          .catch(() => {
            setCurrentUser({ ...user, validated: false })
            if (initialazing) setInitialazing(false)
            toast.error(errMsg.getUserInfo)
          })
      } else {
        setCurrentUser(null)
      }
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
