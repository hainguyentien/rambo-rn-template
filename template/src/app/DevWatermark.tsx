import { Text } from '@Components/Text'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { currentScreenSelector } from '@Redux/AppConfig/AppConfigSelector'

const Dev_Watermark = () => {
  const currentScreen = useSelector(currentScreenSelector)
  const topPosition = useSafeAreaInsets().top

  if (!__DEV__) {
    return null
  }
  return (
    <View
      pointerEvents="none"
      style={[styles.container, { top: Math.max(topPosition - 12, 0) }]}>
      <Text white>{currentScreen}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    paddingHorizontal: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    opacity: 0.95,
  },
})

export default Dev_Watermark
