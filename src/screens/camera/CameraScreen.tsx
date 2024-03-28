import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { Camera, Code, useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
import { Dialog } from 'react-native-paper'

import { AddUserDialog } from './AddUserDialog'
import { UserExistDialog } from './UserExistDialog'
import { useUserUplaod } from '../../hooks/useCheckUser'
import { useIsForeground } from '../../hooks/useIsForeground'

export const CameraContainer = () => {
  const device = useCameraDevice('back')
  const isFocused = useIsFocused()
  const isForeground = useIsForeground()
  const isActive = isFocused && isForeground

  const {
    handleSubmit,
    openAddUser,
    openUserExist,
    setOpenAddUser,
    setOpenUserExist,
    setQRCode,
    userExists,
  } = useUserUplaod()

  const onCodeScanned = useCallback((codes: Code[]) => {
    const value = codes[0]?.value
    if (!value) return
    if (openAddUser || openUserExist) return
    userExists(value)
    setQRCode(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  })

  return (
    <View style={{ width: '100%', height: '100%' }}>
      {device != null && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          codeScanner={codeScanner}
          enableZoomGesture={true}
        />
      )}
      <Dialog visible={openAddUser}>
        <AddUserDialog onClose={() => setOpenAddUser(false)} onSubmit={handleSubmit} />
      </Dialog>
      <Dialog visible={openUserExist}>
        <UserExistDialog onClose={() => setOpenUserExist(false)} />
      </Dialog>
    </View>
  )
}
