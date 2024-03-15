import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RoutesTypes } from './Routes'
import { LoginScreen } from '../screens/login/LoginScreen'
import { HomeScreen } from '../screens/home/HomeScreen'
import { PermissionScreen } from '../screens/permission/PermissionScreen'
import { CameraContainer } from '../screens/camera/CameraScreen'

const Stack = createStackNavigator<RoutesTypes>()
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='PermissionScreen' component={PermissionScreen} />
      <Stack.Screen name='CameraScreen' component={CameraContainer} />
    </Stack.Navigator>
  )
}
