import React, { ReactElement, ReactNode } from 'react'
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

const CheckBoxQR = <T extends FieldValues, Q>({ label, name, control }: CheckBoxQRProps<T, Q>) => {
  return (
    <Controller
      control={control}
      name={name}
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
          {label && <View style={{ marginLeft: 5 }}>{label}</View>}
        </Pressable>
      )}
    />
  )
}

const TextInputQR = <T extends FieldValues, Q>({
  label,
  name,
  control,
}: TextInputQRProps<T, Q>) => {
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

const Form = ({ children }: { children: ReactElement }) => {
  return <>{() => children}</>
}

export default Object.assign(Form, { TextInputQR, CheckBoxQR })
