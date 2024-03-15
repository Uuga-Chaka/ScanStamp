import React from 'react'
import { View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useCameraPermission } from 'react-native-vision-camera'

import { Button, Text } from 'react-native-paper'

import { RoutesTypes } from 'routes/Routes'
import { styles } from 'theme'

import { buttons } from '../../../localization/EN'

export const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RoutesTypes>>()
  const { hasPermission } = useCameraPermission()

  const handlePermission = () =>
    hasPermission ? navigate('CameraScreen') : navigate('PermissionScreen')
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
        <Text>{buttons.scanQR}</Text>
      </Button>
    </View>
  )
}
