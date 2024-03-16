import React from 'react'
import { Button, Dialog, Text } from 'react-native-paper'

import { buttons, cameraDialog } from '../../../localization/EN'

type Props = {
  onClose: () => void
  onSubmit: () => void
}
export const AddUserDialog = ({ onClose, onSubmit }: Props) => {
  return (
    <>
      <Dialog.Title>
        <Text>{cameraDialog.addUser}</Text>
      </Dialog.Title>
      <Dialog.Content>
        <Text>{cameraDialog.verifyAddUsers}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onClose}>{buttons.no}</Button>
        <Button onPress={onSubmit}>{buttons.yes}</Button>
      </Dialog.Actions>
    </>
  )
}
