import React, { ReactNode } from 'react'
import { Checkbox, TextInput } from 'react-native-paper'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Pressable, View } from 'react-native'

type CheckBoxQRProps<T extends FieldValues, Q> = {
  label: ReactNode
  name: Path<T>
  control: Control<T, Q>
}

type TextInputQRProps<T extends FieldValues, Q> = {
  label: string
  name: Path<T>
  control: Control<T, Q>
}

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

const InputText = <T extends FieldValues, Q>({ label, name, control }: TextInputQRProps<T, Q>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          mode='outlined'
          label={label}
          onBlur={onBlur}
          onChangeText={(val) => onChange(val)}
          value={value}
        />
      )}
    />
  )
}

export const QRForm = Object.assign(Form, { InputText, CheckBox })
