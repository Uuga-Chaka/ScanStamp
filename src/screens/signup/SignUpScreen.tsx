import React from 'react'
import { Pressable, View } from 'react-native'

import { Button, Checkbox, Text, TextInput, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import { Controller, useForm } from 'react-hook-form'
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
  validateEmail: yup
    .string()
    .oneOf([yup.ref('email'), ''], 'Does not match')
    .email()
    .required(),
  password: yup.string().email().required(),
  validatePassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Does not match')
    .email()
    .required(),
  acceptPolicy: yup.bool().isTrue().required(),
})

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const theme = useTheme()
  const { control, handleSubmit } = useForm<ISignUpForm>({
    resolver: yupResolver<ISignUpForm>(signUpSchema),
  })

  const goToLogin = () => navigation.navigate('LoginScreen')
  const submit = () => handleSubmit((data) => console.log(data))

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={{ paddingVertical: 100 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
          {common.signUp}
        </Text>
        <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode='outlined'
                label={input.email}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name='validateEmail'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode='outlined'
                label={input.validateEmail}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode='outlined'
                secureTextEntry
                label={input.password}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name='validatePassword'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode='outlined'
                secureTextEntry
                label={input.validatePassword}
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Controller
              control={control}
              name='acceptPolicy'
              render={({ field: { onChange, onBlur, value = false } }) => (
                <Pressable
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                  onBlur={onBlur}
                  onPress={() => onChange(!value)}
                >
                  <Checkbox status={value ? 'checked' : 'unchecked'} />
                  <Text style={{ marginLeft: 5 }}>{textNavigation.accept}</Text>
                </Pressable>
              )}
            />
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
