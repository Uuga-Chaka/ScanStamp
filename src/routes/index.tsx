import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RoutesTypes } from './Routes'
import { HomeScreen } from 'screens/home/HomeScreen'
import { PermissionScreen } from 'screens/permission/PermissionScreen'
import { CameraContainer } from 'screens/camera/CameraScreen'

const Stack = createStackNavigator<RoutesTypes>()
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='PermissionPage' component={PermissionScreen} />
      <Stack.Screen name='CameraPage' component={CameraContainer} />
    </Stack.Navigator>
  )
}
