import React from 'react'
import { Button, Dialog, Text } from 'react-native-paper'
import { buttons } from '../localization/EN'

type Props = {
  onClose: () => void
}
export const UserExistDialog = ({ onClose }: Props) => {
  return (
    <>
      <Dialog.Title>
        <Text>Exists</Text>
      </Dialog.Title>
      <Dialog.Content>
        <Text>This user has been added</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onClose}>{buttons.done}</Button>
      </Dialog.Actions>
    </>
  )
}
