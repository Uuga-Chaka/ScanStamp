import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { MaterialBottomTabScreenProps } from 'react-native-paper'

export type TabParamList = {
  ProfileScreen: undefined
  QRCodeScreen: undefined
  QRListScreen: undefined
  QRScanScreen: undefined
}

export type RoutesTypes = {
  CameraScreen: undefined
  HomeScreen: undefined
  LoginScreen: undefined
  NoVerified: undefined
  PermissionScreen: undefined
  SignUpScreen: undefined
}

type AllRoutes = TabParamList & RoutesTypes

export type AppRoutes<T extends keyof AllRoutes> = CompositeScreenProps<
  MaterialBottomTabScreenProps<TabParamList, T extends keyof TabParamList ? T : never>,
  StackScreenProps<RoutesTypes, T extends keyof RoutesTypes ? T : never>
>
