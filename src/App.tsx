import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { StackNavigator } from './StackNavigator'
import { PaperProvider } from 'react-native-paper'

// Docs
// https://react-native-vision-camera.com/docs/guides
// https://github.com/mrousavy/react-native-vision-camera/issues/1376
// https://github.com/mrousavy/react-native-vision-camera

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App
