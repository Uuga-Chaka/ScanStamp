import { useEffect, useRef } from 'react'
import { Toast } from 'react-hot-toast'
import { Animated, View } from 'react-native'
import { Text } from 'react-native-paper'

type IToastProps = { t: Toast; updateHeight: (heeight: number) => void; offset: number }

export const HotToast = ({ t, updateHeight, offset }: IToastProps) => {
  // Animations for enter and exit
  const fadeAnim = useRef(new Animated.Value(0.5)).current
  const posAnim = useRef(new Animated.Value(-80)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: t.visible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [fadeAnim, t.visible])

  useEffect(() => {
    Animated.spring(posAnim, {
      toValue: t.visible ? offset : -80,
      useNativeDriver: false,
    }).start()
  }, [posAnim, offset, t.visible])

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: t.visible ? 9999 : undefined,
        alignItems: 'center',
        opacity: fadeAnim,
        transform: [
          {
            translateY: posAnim,
          },
        ],
      }}
    >
      <View
        onLayout={(event) => updateHeight(event.nativeEvent.layout.height)}
        style={{
          margin: 40,
          backgroundColor: '#000',
          width: 150,
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}
        key={t.id}
      >
        <Text>{t.icon} </Text>
        <Text
          style={{
            color: '#fff',
            padding: 4,
            flex: 1,
            textAlign: 'center',
          }}
        >
          {t.message as string}
        </Text>
      </View>
    </Animated.View>
  )
}
