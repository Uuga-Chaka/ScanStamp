import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Button, Checkbox, Text, TextInput, useTheme } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from '../../theme'
import { common, input, textNavigation } from '../../../localization/EN'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RoutesTypes } from '../../routes/Routes'

type SignUpScreenProps = NativeStackScreenProps<RoutesTypes, 'SignUpScreen'>
export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const theme = useTheme()

  const goToLogin = () => navigation.navigate('LoginScreen')

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={{ paddingVertical: 100 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
          {common.signUp}
        </Text>
        <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
          <TextInput mode='outlined' label={input.email} />
          <TextInput mode='outlined' label={input.validateEmail} />
          <TextInput mode='outlined' secureTextEntry label={input.password} />
          <TextInput mode='outlined' secureTextEntry label={input.validatePassword} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setAcceptPolicy(!acceptPolicy)}
            >
              <Checkbox status={acceptPolicy ? 'checked' : 'unchecked'} />
              <Text style={{ marginLeft: 5 }}>{textNavigation.accept}</Text>
            </Pressable>
            <Pressable onPress={goToLogin}>
              <Text style={{ color: theme.colors.primary }}> {textNavigation.terms}</Text>
            </Pressable>
          </View>
        </View>
        <Button mode='contained'>{common.signUp}</Button>
        <View
          style={{ display: 'flex', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Text>{textNavigation.alreadyHaveAccount} </Text>
          <Pressable onPress={goToLogin}>
            <Text style={{ color: theme.colors.primary }}> {common.logIn}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}
