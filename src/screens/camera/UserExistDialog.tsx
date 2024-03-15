import React from 'react'
import { Button, Dialog, Text } from 'react-native-paper'
import { buttons, cameraDialog } from '../../../localization/EN'

type Props = {
  onClose: () => void
}
export const UserExistDialog = ({ onClose }: Props) => {
  return (
    <>
      <Dialog.Title>
        <Text>{cameraDialog.exist}</Text>
      </Dialog.Title>
      <Dialog.Content>
        <Text>{cameraDialog.userAdded}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onClose}>{buttons.done}</Button>
      </Dialog.Actions>
    </>
  )
}
