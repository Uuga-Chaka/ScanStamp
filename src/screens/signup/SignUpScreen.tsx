import React from 'react'
import { Pressable, View } from 'react-native'

import { Button, Text, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { common, input, textNavigation } from '../../../localization/EN'
import { RoutesTypes } from '../../routes/Routes'
import { styles } from '../../theme'
import { QRForm } from '../../components/Input'

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
  password: yup.string().required(),
  validatePassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Does not match')
    .required(),
  acceptPolicy: yup.bool().isTrue().required(),
})

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const theme = useTheme()
  const { control, handleSubmit } = useForm<ISignUpForm>({
    resolver: yupResolver<ISignUpForm>(signUpSchema),
    defaultValues: {
      acceptPolicy: false,
      email: '',
      validateEmail: '',
      password: '',
      validatePassword: '',
    },
  })

  const goToLogin = () => navigation.navigate('LoginScreen')

  const submit = () => {
    return handleSubmit((data) => console.log(data))
  }

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={{ paddingTop: 100 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
          {common.signUp}
        </Text>
        <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
          <QRForm>
            <QRForm.InputText control={control} name='email' label={input.email} />
            <QRForm.InputText control={control} name='validateEmail' label={input.validateEmail} />
            <QRForm.InputText control={control} name='password' label={input.password} />
            <QRForm.InputText
              control={control}
              name='validatePassword'
              label={input.validatePassword}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <QRForm.CheckBox
                control={control}
                name='acceptPolicy'
                label={
                  <>
                    <Text>{textNavigation.accept}</Text>
                    <Pressable onPress={goToLogin}>
                      <Text style={{ color: theme.colors.primary }}> {textNavigation.terms}</Text>
                    </Pressable>
                  </>
                }
              />
            </View>
          </QRForm>
        </View>
        <Button mode='contained' onPress={void submit()}>
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
