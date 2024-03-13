import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Routes } from './Routes'
import { PermissionPage } from './PermissionPage'
import { CameraContainer } from './CameraContainer'
import { Camera } from 'react-native-vision-camera'
const Stack = createStackNavigator<Routes>()
export const StackNavigator = () => {
  const cameraPermission = Camera.getCameraPermissionStatus()
  const showPermissionsPage = cameraPermission !== 'granted'
  return (
    <Stack.Navigator initialRouteName={showPermissionsPage ? 'PermissionPage' : 'CameraPage'}>
      <Stack.Screen name='PermissionPage' component={PermissionPage} />
      <Stack.Screen name='CameraPage' component={CameraContainer} />
    </Stack.Navigator>
  )
}
