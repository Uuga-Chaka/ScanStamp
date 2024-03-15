import React from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../../theme'
import { buttons, input, title } from '../../../localization/EN'

export const LoginScreen = () => {
  return (
    <View
      style={{
        ...styles.container,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
        {title.logIn}
      </Text>
      <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
        <TextInput mode='outlined' label={input.email} />
        <TextInput mode='outlined' secureTextEntry label={input.password} />
      </View>
      <Button mode='contained'>{buttons.logIn}</Button>
    </View>
  )
}
