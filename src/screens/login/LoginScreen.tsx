import React from 'react'
import { Pressable, View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { common, errMsg, input, textNavigation } from '../../../localization/EN'
import { styles } from '../../theme'
import { RoutesTypes } from '../../routes/Routes'
import { QRForm } from '../../components/Input'
import { loginUser } from '../../../services/auth'

type LoginScreenProps = NativeStackScreenProps<RoutesTypes, 'LoginScreen'>

type ILoginForm = {
  email: string
  password: string
}

const logInSchema = yup.object({
  email: yup.string().email().required(errMsg.requiredEmail),
  password: yup.string().required(errMsg.passwordRequired),
})

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const theme = useTheme()

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ILoginForm>({
    resolver: yupResolver<ILoginForm>(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const submit = () => handleSubmit((data) => loginUser(data))

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
        <QRForm>
          <QRForm.InputText control={control} name='email' label={input.email} autoFocus />
          <QRForm.InputText
            control={control}
            name='password'
            label={input.password}
            secureTextEntry
          />
        </QRForm>
      </View>
      <Button mode='contained' onPress={submit()} disabled={!isValid || !isDirty}>
        {common.logIn}
      </Button>
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
