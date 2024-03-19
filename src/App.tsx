import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Routes } from './routes'
import errorHandler from '../utils/ErrorHandler'
import { Notification } from './components/Notification'

// Docs
// https://react-native-vision-camera.com/docs/guides
// https://github.com/mrousavy/react-native-vision-camera/issues/1376
// https://github.com/mrousavy/react-native-vision-camera

function App(): React.JSX.Element {
  ErrorUtils.setGlobalHandler(errorHandler)

  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
          <Notification />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App
