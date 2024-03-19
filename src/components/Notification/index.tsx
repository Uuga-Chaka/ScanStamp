import React from 'react'
import { useToaster } from 'react-hot-toast/headless'
import { View } from 'react-native'
import { HotToast } from '../HotToast'

export const Notification = () => {
  const { toasts, handlers } = useToaster()
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      {toasts.map((t) => (
        <HotToast
          key={t.id}
          t={t}
          updateHeight={(height) => handlers.updateHeight(t.id, height)}
          offset={handlers.calculateOffset(t, {
            reverseOrder: false,
          })}
        />
      ))}
    </View>
  )
}
