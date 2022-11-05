import { useCustomTheme } from '@Configs/themes'
import React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import Icon, { IconPack } from './Icon'
import Box from './Box'
import Text from './Text'

interface CustomButtonProps {
  label: string
  loading?: boolean
  outline?: boolean
  color?: string
  icon?: { name: string; pack: IconPack }
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: () => void
}

const Button = (props: CustomButtonProps) => {
  const { loading, outline, containerStyle, label, textStyle } = props
  const { colors } = useCustomTheme()
  const highlightColor = props.color ?? colors.primary
  return (
    <Box
      horizontal
      justifyContent="center"
      disabled={loading}
      padding={15}
      borderRadius={10}
      style={[
        {
          backgroundColor: outline ? colors.card : highlightColor,
          borderColor: outline ? highlightColor : colors.background,
          borderWidth: outline ? 1 : 0,
        },
        containerStyle,
      ]}
      onPress={props.onPress}>
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={outline ? highlightColor : colors.background}
        />
      ) : (
        <>
          {props.icon && (
            <Icon
              name={props.icon.name}
              pack={props.icon.pack}
              size={20}
              color={outline ? highlightColor : '#ffffff'}
              style={{ marginRight: 5 }}
            />
          )}
          <Text
            bold
            h4
            style={[
              styles.text,
              { color: outline ? highlightColor : '#ffffff' },
              textStyle,
            ]}>
            {label}
          </Text>
        </>
      )}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {},
})

export default React.memo(Button)
