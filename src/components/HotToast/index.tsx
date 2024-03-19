import { useEffect, useRef } from 'react'
import { Toast } from 'react-hot-toast'
import { Animated, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { colors, styles } from '../../theme'

type IToastProps = { t: Toast; updateHeight: (heeight: number) => void; offset: number }

export const HotToast = ({ t, updateHeight, offset }: IToastProps) => {
  // Animations for enter and exit
  const fadeAnim = useRef(new Animated.Value(0.5)).current
  const posAnim = useRef(new Animated.Value(-80)).current

  const handleTypes = () => {
    switch (t.type) {
      case 'error':
        return <Icon source={'close-thick'} size={24} color={colors.red} />
      case 'success':
        return <Icon source={'check-bold'} size={24} color={colors.green} />
      default:
        return <Icon source={'information'} size={24} color={colors.blue} />
    }
  }

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
        alignItems: 'center',
        zIndex: t.visible ? 9999 : undefined,
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
        style={{ ...styles.alertContainer }}
        key={t.id}
      >
        <Text>{handleTypes()}</Text>
        <Text style={styles.alertText}>{t.message as string}</Text>
      </View>
    </Animated.View>
  )
}
