import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'
import { styles } from '../../theme'

type ButtonVariants = 'outline' | 'filled'
type ButtonColors = 'error' | 'success' | 'info' | 'warning'

type CustomButtonProps = {
  variant: ButtonVariants
  color: ButtonColors
  children: string
} & PressableProps

export const Button = ({ variant, color, children, ...props }: CustomButtonProps) => {
  return (
    <Pressable {...props} style={styles.buttonError}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}
