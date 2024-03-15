import React from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { styles } from '../../theme'
import { buttons, input, title } from '../../../localization/EN'

export const SignUpScreen = () => {
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
        {title.signUp}
      </Text>
      <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
        <TextInput mode='outlined' label={input.email} />
        <TextInput mode='outlined' label={input.validateEmail} />
        <TextInput mode='outlined' secureTextEntry label={input.password} />
        <TextInput mode='outlined' secureTextEntry label={input.validatePassword} />
      </View>
      <Button mode='contained'>{buttons.signUp}</Button>
    </View>
  )
}
