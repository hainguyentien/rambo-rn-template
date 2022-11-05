import React from 'react'
import {
  ColorValue,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native'

interface BoxProps extends PressableProps {
  horizontal?: boolean
  style?: StyleProp<ViewStyle>
  borderRadius?: number
  flex?: number
  padding?: number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  paddingHorizontal?: number
  paddingVertical?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  marginHorizontal?: number
  marginVertical?: number
  margin?: number
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  width?: number | string
  height?: number
  color?: ColorValue
  borderColor?: ColorValue
  borderTopRadius?: number
}

const Box: React.FC<BoxProps> = props => {
  const {
    children,
    horizontal,
    style,
    borderRadius,
    flex,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingVertical,
    paddingHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    marginHorizontal,
    marginVertical,
    margin,
    width,
    height,
    alignItems,
    justifyContent,
    color,
    borderColor,
    borderTopRadius,
    onPress,
    hitSlop,
    ...restProps
  } = props

  const calculatedStyle = StyleSheet.flatten<ViewStyle>([
    !!horizontal && { flexDirection: 'row', alignItems: 'center' },
    {
      flex,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingVertical,
      paddingHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      margin,
      borderRadius,
      marginHorizontal,
      marginVertical,
      width,
      height,
      justifyContent,
      backgroundColor: color,
    },
    // This make horizontal align center if it not configured
    !!alignItems && { alignItems },
    !!borderColor && { borderColor: borderColor, borderWidth: 1 },
    !!borderTopRadius && {
      borderTopLeftRadius: borderTopRadius,
      borderTopRightRadius: borderTopRadius,
    },
    style,
  ])

  if (onPress) {
    return (
      <Pressable style={calculatedStyle} {...restProps}>
        {children}
      </Pressable>
    )
  }
  return (
    <View style={calculatedStyle} {...restProps}>
      {children}
    </View>
  )
}

export default Box
