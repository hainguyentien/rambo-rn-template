import { images } from '@Assets'
import Box from '@Components/Box'
import CommonWidths from '@Configs/responsive/CommonWidths'
import React, { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
const Splash = () => {
  const dispatch = useDispatch()

  const breathing = useSharedValue(CommonWidths.p50)

  useEffect(() => {
    breathing.value = withRepeat(
      withTiming(CommonWidths.p60, { duration: 500 }),
      100,
      true,
    )
  }, [])

  const logoBreathStyle = useAnimatedStyle(() => {
    return {
      width: breathing.value,
    }
  })

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Animated.Image
        source={images.LOGO}
        style={logoBreathStyle}
        resizeMode="contain"
      />
    </Box>
  )
}

export default Splash
