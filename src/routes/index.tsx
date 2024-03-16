import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CameraContainer } from '../screens/camera/CameraScreen'
import { HomeScreen } from '../screens/home/HomeScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { PermissionScreen } from '../screens/permission/PermissionScreen'
import { SignUpScreen } from '../screens/signup/SignUpScreen'

import { RoutesTypes } from './Routes'

const Stack = createStackNavigator<RoutesTypes>()
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='PermissionScreen' component={PermissionScreen} />
      <Stack.Screen name='CameraScreen' component={CameraContainer} />
    </Stack.Navigator>
  )
}
