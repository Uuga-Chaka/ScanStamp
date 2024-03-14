import React from 'react'
import { Button, Dialog, Text } from 'react-native-paper'
import { buttons } from '../localization/EN'

type Props = {
  onClose: () => void
  onSubmit: () => void
}
export const AddUserDialog = ({ onClose, onSubmit }: Props) => {
  return (
    <>
      <Dialog.Title>
        <Text> Add user</Text>
      </Dialog.Title>
      <Dialog.Content>
        <Text>Do you want to add this users to the database?</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onClose}>{buttons.no}</Button>
        <Button onPress={onSubmit}>{buttons.yes}</Button>
      </Dialog.Actions>
    </>
  )
}
