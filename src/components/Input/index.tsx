import React, { ReactNode, useState } from 'react'
import { Checkbox, Text, TextInput, TextInputProps } from 'react-native-paper'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Pressable, View } from 'react-native'

type CheckBoxQRProps<T extends FieldValues, Q> = {
  label: ReactNode
  name: Path<T>
  control: Control<T, Q>
}

type TextInputQRProps<T extends FieldValues, Q> = {
  label: string
  errorMessage?: string
  name: Path<T>
  control: Control<T, Q>
} & TextInputProps

const Form = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

const CheckBox = <T extends FieldValues, Q>({ label, name, control }: CheckBoxQRProps<T, Q>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = false } }) => (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Pressable style={{ marginRight: 5 }}>
            <Checkbox status={value ? 'checked' : 'unchecked'} onPress={() => onChange(!value)} />
          </Pressable>
          {label && label}
        </View>
      )}
    />
  )
}

const InputText = <T extends FieldValues, Q>({
  label,
  name,
  control,
  errorMessage,
  secureTextEntry,
  ...props
}: TextInputQRProps<T, Q>) => {
  const [secured, setSecured] = useState(secureTextEntry)
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <TextInput
              {...props}
              mode='outlined'
              label={label}
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
              secureTextEntry={secured}
              right={
                secureTextEntry ? (
                  <TextInput.Icon
                    icon={secured ? 'eye-off' : 'eye'}
                    focusable={false}
                    onPress={() => setSecured(!secured)}
                    forceTextInputFocus
                  />
                ) : null
              }
            />
            {errorMessage && (
              <Text variant='labelSmall' style={{ padding: 5 }}>
                {errorMessage}
              </Text>
            )}
          </View>
        )}
      />
    </>
  )
}

export const QRForm = Object.assign(Form, { InputText, CheckBox })
