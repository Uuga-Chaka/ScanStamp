import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { signOut } from '../../../services/auth'
import { buttons } from '../../../localization/EN'

export const NoVerified = () => {
  return (
    <View
      style={{
        display: 'flex',
        padding: 20,
        justifyContent: 'center',
        height: '100%',
        alignItems: 'flex-start',
      }}
    >
      <Text variant='displaySmall' style={{ fontWeight: '900' }}>
        You can't use the app yet!
      </Text>
      <Text variant='titleMedium' style={{ marginTop: 30, marginBottom: 60 }}>
        Wait for your account to be activated to use this application.
      </Text>
      <Button onPress={signOut} mode='contained' style={{ alignSelf: 'flex-end' }}>
        {buttons.signOut}
      </Button>
    </View>
  )
}
