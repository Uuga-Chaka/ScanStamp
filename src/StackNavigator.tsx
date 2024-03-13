import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Routes } from './Routes'
import { PermissionPage } from './PermissionPage'
import { CameraContainer } from './CameraContainer'
import { Home } from './Home'
const Stack = createStackNavigator<Routes>()
export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='PermissionPage' component={PermissionPage} />
      <Stack.Screen name='CameraPage' component={CameraContainer} />
    </Stack.Navigator>
  )
}
