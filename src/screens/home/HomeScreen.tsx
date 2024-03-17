import React from 'react'
import { View } from 'react-native'
import { useCameraPermission } from 'react-native-vision-camera'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from 'react-native-paper'

import { buttons } from '../../../localization/EN'
import { styles } from '../../theme'
import { RoutesTypes } from '../../routes/Routes'
import { signOut } from '../../../services/auth'

type HomeScreenProps = NativeStackScreenProps<RoutesTypes, 'HomeScreen'>

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { hasPermission } = useCameraPermission()

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
      <Button mode='outlined' onPress={signOut}>
        {buttons.signOut}
      </Button>
    </View>
  )
}
