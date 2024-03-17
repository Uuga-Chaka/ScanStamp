import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export const LoadingScreen = () => {
  return (
    <View
      style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      <ActivityIndicator size={'large'} />
    </View>
  )
}
