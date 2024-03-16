import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useCameraPermission } from 'react-native-vision-camera'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { Button } from 'react-native-paper'

import { buttons } from '../../../localization/EN'
import { styles } from '../../theme'
import { RoutesTypes } from '../../routes/Routes'
import { useAuthStore } from '../../store'

type HomeScreenProps = NativeStackScreenProps<RoutesTypes, 'HomeScreen'>

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { hasPermission } = useCameraPermission()

  const [initialazing, setInitialazing] = useState(true)
  const currentUser = useAuthStore((authStore) => authStore.currentUser)
  const setCurrentUser = useAuthStore((authStore) => authStore.updateCurrentUser)

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setCurrentUser(user)
    if (initialazing) setInitialazing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (initialazing) return
  if (!currentUser) navigation.navigate('SignUpScreen')

  const handlePermission = () =>
    hasPermission ? navigation.navigate('CameraScreen') : navigation.navigate('PermissionScreen')
  return (
    <View
      style={{
        ...styles.container,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Button mode='contained' onPress={handlePermission}>
        {buttons.scanQR}
      </Button>
    </View>
  )
}
