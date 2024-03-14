import { useCallback, useEffect, useState } from 'react'
import { Linking, View } from 'react-native'

import { Camera, CameraPermissionStatus } from 'react-native-vision-camera'
import { Routes } from './Routes'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Button, Text } from 'react-native-paper'
import { colors } from './theme'

export const PermissionPage = () => {
  const { navigate } = useNavigation<NavigationProp<Routes>>()
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined')

  const requestCameraPermission = useCallback(() => {
    console.log('Requesting camera permission...')
    Camera.requestCameraPermission()
      .then((permission) => {
        console.log(`Camera permission status: ${permission}`)
        if (permission === 'denied') return Linking.openSettings()
        setCameraPermissionStatus(permission)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (cameraPermissionStatus === 'granted') navigate('CameraPage')
  }, [cameraPermissionStatus, navigate])
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {cameraPermissionStatus !== 'granted' && (
        <Button onPress={requestCameraPermission}>
          <Text>Add permission</Text>
        </Button>
      )}
    </View>
  )
}
