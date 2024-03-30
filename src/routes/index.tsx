import { createStackNavigator } from '@react-navigation/stack'
import { useCameraPermission } from 'react-native-vision-camera'

import { LoadingScreen } from '../screens/loading/LoadingScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { PermissionScreen } from '../screens/permission/PermissionScreen'
import { SignUpScreen } from '../screens/signup/SignUpScreen'

import { RoutesTypes } from './Routes'
import { NoVerified } from '../screens/noVerified/NoVerified'
import { useAuthHandler } from '../hooks/useAuthHandler'
import { HomeScreen } from '../screens/home/HomeScreen'

const Stack = createStackNavigator<RoutesTypes>()
export const Routes = () => {
  const { initialazing, currentUser } = useAuthHandler()
  const { hasPermission } = useCameraPermission()

  if (initialazing) return <LoadingScreen />
  const isAuthenticated = !!currentUser
  const isValidated = isAuthenticated && currentUser.validated
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        isValidated ? (
          hasPermission ? (
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
          ) : (
            <Stack.Screen name='PermissionScreen' component={PermissionScreen} />
          )
        ) : (
          <Stack.Screen name='NoVerified' component={NoVerified} />
        )
      ) : (
        <>
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}
