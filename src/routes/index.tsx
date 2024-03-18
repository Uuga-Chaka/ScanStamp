import { createStackNavigator } from '@react-navigation/stack'

import { CameraContainer } from '../screens/camera/CameraScreen'
import { HomeScreen } from '../screens/home/HomeScreen'
import { LoadingScreen } from '../screens/loading/LoadingScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { PermissionScreen } from '../screens/permission/PermissionScreen'
import { SignUpScreen } from '../screens/signup/SignUpScreen'

import { RoutesTypes } from './Routes'
import { NoVerified } from '../screens/noVerified/NoVerified'
import { useAuthHandler } from '../hooks/useAuthHandler'

const Stack = createStackNavigator<RoutesTypes>()
export const Routes = () => {
  const { initialazing, currentUser } = useAuthHandler()
  if (initialazing) return <LoadingScreen />

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!currentUser ? (
        <>
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </>
      ) : currentUser.verified ? (
        <>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='PermissionScreen' component={PermissionScreen} />
          <Stack.Screen name='CameraScreen' component={CameraContainer} />
        </>
      ) : (
        <Stack.Screen name='NoVerified' component={NoVerified} />
      )}
    </Stack.Navigator>
  )
}
