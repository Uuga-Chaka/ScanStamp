import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { PaperProvider } from 'react-native-paper'
import { Routes } from './routes'

// Docs
// https://react-native-vision-camera.com/docs/guides
// https://github.com/mrousavy/react-native-vision-camera/issues/1376
// https://github.com/mrousavy/react-native-vision-camera

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App
