import React from 'react'
import { Button, Dialog, Text } from 'react-native-paper'
import { buttons } from '../localization/EN'

type Props = {
  onClose: () => void
  onSubmit: () => void
}
export const DialogContent = ({ onClose, onSubmit }: Props) => {
  return (
    <>
      <Dialog.Title>
        <Text> This user has been added</Text>
      </Dialog.Title>
      <Dialog.Content>
        <Text>This user has been added</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onClose}>{buttons.done}</Button>
        <Button onPress={onSubmit}>{buttons.submit}</Button>
      </Dialog.Actions>
    </>
  )
}
