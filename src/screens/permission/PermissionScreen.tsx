import { useCallback, useEffect, useState } from 'react'
import { Linking, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera'
import { Button, Text } from 'react-native-paper'

import { buttons, cameraDialog } from '../../../localization/EN'
import { RoutesTypes } from '../../routes/Routes'

type SignUpScreenProps = NativeStackScreenProps<RoutesTypes, 'PermissionScreen'>

export const PermissionScreen = ({ navigation }: SignUpScreenProps) => {
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
    if (cameraPermissionStatus === 'granted') navigation.navigate('HomeScreen')
  }, [cameraPermissionStatus, navigation])

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ marginBottom: 50 }}>{cameraDialog.givePermissions}</Text>
      {cameraPermissionStatus !== 'granted' && (
        <Button mode='outlined' onPress={requestCameraPermission}>
          {buttons.givePermission}
        </Button>
      )}
    </View>
  )
}
