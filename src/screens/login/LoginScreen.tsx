import React from 'react'
import { Pressable, View } from 'react-native'
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { common, input, textNavigation } from '../../../localization/EN'
import { styles } from '../../theme'
import { RoutesTypes } from '../../routes/Routes'

type LoginScreenProps = NativeStackScreenProps<RoutesTypes, 'LoginScreen'>
export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const theme = useTheme()

  const goToSignUp = () => navigation.navigate('SignUpScreen')

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
        {common.logIn}
      </Text>
      <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
        <TextInput mode='outlined' label={input.email} />
        <TextInput mode='outlined' secureTextEntry label={input.password} />
      </View>
      <Button mode='contained'>{common.logIn}</Button>
      <View
        style={{ display: 'flex', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}
      >
        <Text>{textNavigation.dontHaveAccount} </Text>
        <Pressable onPress={goToSignUp}>
          <Text style={{ color: theme.colors.primary }}> {common.signUp}</Text>
        </Pressable>
      </View>
    </View>
  )
}
