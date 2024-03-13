import React from 'react'
import { View } from 'react-native'
import { Button } from './Components/Buttons/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Routes } from './Routes'
import { styles } from './theme'
import { useCameraPermission } from 'react-native-vision-camera'

export const Home = () => {
  const { navigate } = useNavigation<NavigationProp<Routes>>()
  const { hasPermission } = useCameraPermission()

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
      <Button
        onPress={() => {
          hasPermission ? navigate('CameraPage') : navigate('PermissionPage')
        }}
        variant='filled'
        color='info'
      >
        Scan QR code
      </Button>
    </View>
  )
}
