import React, { useCallback, useState } from 'react'
import { useIsFocused } from '@react-navigation/core'
import { View } from 'react-native'
import { Camera, Code, useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
import { Dialog } from 'react-native-paper'
import { DialogContent } from './DialogContent'

import api from '../services/api'

export const CameraContainer = () => {
  const device = useCameraDevice('back')
  const isFocused = useIsFocused()

  const [QRCode, setQRCode] = useState('')
  const [isShowingDialog, setIsShowingDialog] = useState(false)

  const handleDismiss = () => setIsShowingDialog(false)
  const handleSubmit = () => {
    api
      .post(QRCode, QRCode)
      .then(() => {
        console.log('Dissmised')
        handleDismiss()
      })
      .catch((err) => {
        console.error(err)
        handleDismiss()
      })
  }

  const onCodeScanned = useCallback((codes: Code[]) => {
    const value = codes[0]?.value
    if (value == null) return
    if (isShowingDialog) return
    setQRCode(() => {
      setIsShowingDialog(true)
      return value
    })
  }, [])

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: onCodeScanned,
  })

  return (
    <View style={{ width: '100%', height: '100%' }}>
      {device != null && (
        <Camera
          style={{ width: '100%', height: '100%', zIndex: 0 }}
          device={device}
          isActive={isFocused}
          codeScanner={codeScanner}
          enableZoomGesture={true}
        />
      )}
      <Dialog style={{ zIndex: 9999 }} visible={isShowingDialog} onDismiss={handleDismiss}>
        <DialogContent onClose={handleDismiss} onSubmit={handleSubmit} />
      </Dialog>
    </View>
  )
}
