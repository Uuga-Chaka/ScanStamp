import { useIsFocused } from '@react-navigation/core'
import React, { useCallback, useRef } from 'react'
import { Alert, AlertButton, Linking, StyleSheet, Text, View } from 'react-native'
import { Camera, Code, useCameraDevice, useCodeScanner } from 'react-native-vision-camera'
const showCodeAlert = (value: string, onDismissed: () => void): void => {
  const buttons: AlertButton[] = [
    {
      text: 'Close',
      style: 'cancel',
      onPress: onDismissed,
    },
  ]
  if (value.startsWith('http')) {
    buttons.push({
      text: 'Open URL',
      onPress: () => {
        Linking.openURL(value)
          .then((e) => console.log(e))
          .catch((err) => console.log(err))
        onDismissed()
      },
    })
  }
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
