import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { buttons } from '../../../localization/EN'
import { signOut } from '../../../services/auth'

export const Profile = () => {
  return (
    <View>
      <Button onPress={signOut}>{buttons.signOut}</Button>
    </View>
  )
}
