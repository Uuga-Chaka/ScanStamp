import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { CameraContainer } from '../screens/camera/CameraScreen'
import { HomeScreen } from '../screens/home/HomeScreen'
import { LoadingScreen } from '../screens/loading/LoadingScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { PermissionScreen } from '../screens/permission/PermissionScreen'
import { SignUpScreen } from '../screens/signup/SignUpScreen'

import { RoutesTypes } from './Routes'
import { useAuthStore } from '../store'

const Stack = createStackNavigator<RoutesTypes>()
export const Routes = () => {
  const [initialazing, setInitialazing] = useState(true)
  const currentUser = useAuthStore((authStore) => authStore.currentUser)
  const setCurrentUser = useAuthStore((authStore) => authStore.updateCurrentUser)

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setCurrentUser(user)
    if (initialazing) setInitialazing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (initialazing) return <LoadingScreen />

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!currentUser ? (
        <>
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='PermissionScreen' component={PermissionScreen} />
          <Stack.Screen name='CameraScreen' component={CameraContainer} />
        </>
      )}
    </Stack.Navigator>
  )
}
