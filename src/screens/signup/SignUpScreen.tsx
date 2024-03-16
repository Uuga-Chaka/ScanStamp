import React, { useState } from 'react'
import { Pressable, View } from 'react-native'

import { Button, Checkbox, Text, TextInput, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { common, input, textNavigation } from '../../../localization/EN'
import { RoutesTypes } from '../../routes/Routes'
import { styles } from '../../theme'

type SignUpScreenProps = NativeStackScreenProps<RoutesTypes, 'SignUpScreen'>

type ISignUpForm = {
  email: string
  validateEmail: string
  password: string
  validatePassword: string
  acceptPolicy: boolean
}

const signUpSchema = yup.object({
  email: yup.string().email().required(),
  validateEmail: yup.string().email().required(),
  password: yup.string().email().required(),
  validatePassword: yup.string().email().required(),
  acceptPolicy: yup.bool().isTrue().required(),
})

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const theme = useTheme()
  const { setValue, handleSubmit } = useForm<ISignUpForm>({
    resolver: yupResolver<ISignUpForm>(signUpSchema),
  })

  const [acceptPolicy, setAcceptPolicy] = useState(false)

  const goToLogin = () => navigation.navigate('LoginScreen')
  const submit = () => {
    handleSubmit((data) => console.log(data))
  }

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={{ paddingVertical: 100 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
          {common.signUp}
        </Text>
        <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
          <TextInput mode='outlined' label={input.email} onChange={(e) => e} />
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
        <Button mode='contained' onPress={submit}>
          {common.signUp}
        </Button>
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
