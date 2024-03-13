import { useIsFocused } from '@react-navigation/core'
import React, { useCallback, useRef } from 'react'
import { Alert, AlertButton, StyleSheet, View } from 'react-native'
import { Camera, Code, useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
import api from '../services/api'
const showCodeAlert = (value: string, onDismissed: () => void): void => {
  const buttons: AlertButton[] = [
    {
      text: 'Close',
      style: 'cancel',
      onPress: onDismissed,
    },
  ]
  buttons.push({
    text: 'Add user',
    onPress: () => {
      api.post(value, value).catch((er) => console.error(er))
      onDismissed()
    },
  })
  Alert.alert('Scanned Code', value, buttons)
}

export const CameraContainer = () => {
  const device = useCameraDevice('back')
  const isFocused = useIsFocused()

  const isShowingAlert = useRef(false)
  const onCodeScanned = useCallback((codes: Code[]) => {
    console.log(`Scanned ${codes.length} codes:`, codes)
    const value = codes[0]?.value
    if (value == null) return
    if (isShowingAlert.current) return
    showCodeAlert(value, () => {
      isShowingAlert.current = false
    })
    isShowingAlert.current = true
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
          isActive={isFocused}
          codeScanner={codeScanner}
          enableZoomGesture={true}
        />
      )}
    </View>
  )
}
