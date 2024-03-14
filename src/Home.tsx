import React from 'react'
import { View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Routes } from './Routes'
import { styles } from './theme'
import { useCameraPermission } from 'react-native-vision-camera'
import { Button, Text } from 'react-native-paper'

export const Home = () => {
  const { navigate } = useNavigation<NavigationProp<Routes>>()
  const { hasPermission } = useCameraPermission()

  const handlePermission = () =>
    hasPermission ? navigate('CameraPage') : navigate('PermissionPage')

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
        <Text>Scan QR code</Text>
      </Button>
    </View>
  )
}
