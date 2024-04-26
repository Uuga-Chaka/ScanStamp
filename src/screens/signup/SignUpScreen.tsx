import React from 'react'
import { Pressable, View } from 'react-native'

import { Button, Text, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { common, errMsg, input, textNavigation } from '../../../localization/EN'
import { RoutesTypes } from '../../routes/Routes'
import { styles } from '../../theme'
import { QRForm } from '../../components/Input'
import { signUpUser } from '../../../services/auth'

type SignUpScreenProps = NativeStackScreenProps<RoutesTypes, 'SignUpScreen'>

type ISignUpForm = {
  email: string
  validateEmail: string
  password: string
  validatePassword: string
  acceptPolicy: boolean
}

const signUpSchema = yup.object({
  email: yup.string().email(errMsg.invalidEmail).required(errMsg.requiredEmail),
  validateEmail: yup
    .string()
    .email(errMsg.invalidEmail)
    .oneOf([yup.ref('email'), ''], errMsg.noSameEmail)
    .required(errMsg.requiredEmail),
  password: yup.string().required(errMsg.passwordRequired),
  validatePassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], errMsg.noSamePassword)
    .required(errMsg.passwordRequired),
  acceptPolicy: yup.bool().isTrue().required(),
})

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ISignUpForm>({
    mode: 'onBlur',
    resolver: yupResolver<ISignUpForm>(signUpSchema),
  })

  const goToLogin = () => navigation.navigate('LoginScreen')

  const submit = () => handleSubmit(({ password, email }) => signUpUser({ password, email }))

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={{ paddingTop: 100 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
          {common.signUp}
        </Text>
        <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
          <QRForm>
            <QRForm.InputText
              control={control}
              name='email'
              label={input.email}
              error={!!errors.email}
              errorMessage={errors.email?.message}
              autoFocus
            />
            <QRForm.InputText
              control={control}
              name='validateEmail'
              label={input.validateEmail}
              error={!!errors.validateEmail}
              errorMessage={errors.validateEmail?.message}
            />
            <QRForm.InputText
              control={control}
              name='password'
              label={input.password}
              error={!!errors.password}
              errorMessage={errors.password?.message}
              secureTextEntry
            />
            <QRForm.InputText
              control={control}
              name='validatePassword'
              label={input.validatePassword}
              error={!!errors.validatePassword}
              errorMessage={errors.validatePassword?.message}
              secureTextEntry
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
        <Button mode='contained' onPress={submit()} disabled={!isDirty || !isValid}>
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
