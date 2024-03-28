import React, { useEffect } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCameraPermission } from 'react-native-vision-camera'

import { CameraContainer } from '../camera/CameraScreen'
import { Profile } from '../profile/Profile'
import { QRList } from '../qrList/QRList'
import { QRScan } from '../qrScan/QRScan'
import { RoutesTypes, TabParamList } from '../../routes/Routes'

const Tab = createMaterialBottomTabNavigator<TabParamList>()
type HomeScreenProps = NativeStackScreenProps<RoutesTypes, 'HomeScreen'>

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { hasPermission } = useCameraPermission()

  useEffect(() => {
    !hasPermission && navigation.navigate('PermissionScreen')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tab.Navigator>
      <Tab.Screen name='QRScanScreen' component={CameraContainer} />
      <Tab.Screen name='QRCodeScreen' component={QRScan} />
      <Tab.Screen name='QRListScreen' component={QRList} />
      <Tab.Screen name='ProfileScreen' component={Profile} />
    </Tab.Navigator>
  )
}
