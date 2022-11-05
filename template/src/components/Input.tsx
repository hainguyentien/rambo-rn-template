import { fonts } from '@Configs/fonts'
import { useCustomTheme } from '@Configs/themes'
import React, { useEffect, useRef, useState } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Box from './Box'
import Icon, { IconPack } from './Icon'
import Text from './Text'

interface InputProps extends TextInputProps {
  icon?: { name: string; pack?: IconPack }
  label: string
  error?: string
  touched?: boolean
  containerStyle?: ViewStyle
}

const Input = ({
  icon,
  containerStyle,
  error,
  touched,
  label,
  onBlur,
  onChangeText,
  secureTextEntry,
  value,
  ...props
}: InputProps) => {
  const { colors } = useCustomTheme()
  const [focused, setFocused] = useState<boolean>(false)
  const [secureText, setSecureText] = useState<boolean>(
    secureTextEntry ?? false,
  )
  const inputRef = useRef<TextInput>(null)

  const textSize = useSharedValue(16)
  const topMargin = useSharedValue(Platform.OS === 'ios' ? -8 : 0)

  const resizeTextStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 10,
      top: topMargin.value,
      fontSize: textSize.value,
      color: focused ? colors.primary : colors.secondaryText,
      fontFamily: fonts.regular,
    }
  })

  const borderColor =
    touched === undefined
      ? focused
        ? colors.primary
        : colors.border
      : error !== undefined
      ? colors.error
      : colors.success

  useEffect(() => {
    if (focused || value) {
      textSize.value = withTiming(12)
      topMargin.value = withTiming(Platform.OS === 'ios' ? -15 : -12)
    } else {
      textSize.value = withTiming(16)
      topMargin.value = withTiming(Platform.OS === 'ios' ? -8 : 0)
    }
  }, [value, focused])

  return (
    <Box width={'100%'}>
      <Box
        style={containerStyle}
        onPress={() => {
          inputRef.current?.focus()
        }}>
        <Box
          horizontal
          borderRadius={10}
          padding={10}
          alignItems="baseline"
          borderColor={borderColor}>
          {icon && (
            <Icon
              name={icon.name}
              pack={icon.pack}
              size={20}
              color={colors.thirdText}
              style={{ paddingVertical: 5 }}
            />
          )}
          <Box flex={1}>
            <Animated.Text style={resizeTextStyle}>{label}</Animated.Text>
            <TextInput
              {...props}
              ref={inputRef}
              style={[styles.input, { color: colors.text }]}
              defaultValue={value}
              onFocus={() => {
                setFocused(true)
              }}
              onBlur={e => {
                setFocused(false)
                onBlur && onBlur(e)
              }}
              onChangeText={text => {
                onChangeText && onChangeText(text)
              }}
              secureTextEntry={secureText}
            />
          </Box>
          {secureTextEntry && (
            <Box
              onPress={() => {
                setSecureText(!secureText)
              }}>
              <Icon
                name={secureText ? 'eye' : 'eye-off'}
                pack={'Ionicons'}
                size={20}
                color={colors.thirdText}
                style={{ paddingVertical: 5 }}
              />
            </Box>
          )}
        </Box>
        {!!touched && error && (
          <Box>
            <Text style={{ color: colors.error }}>* {error}</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default React.memo(Input)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'baseline',
  },
  input: {
    marginLeft: 10,
    fontFamily: fonts.regular,
    padding: 0, // For Android padding input
  },
})
