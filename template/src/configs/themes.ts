import { useTheme } from '@react-navigation/native'
import { COLORS } from './colors'

export type CustomTheme = {
  dark: boolean
  colors: {
    primary: string
    background: string
    card: string
    text: string
    border: string
    error: string
    success: string
    warning: string
    waiting: string
    disable: string
    secondaryCard: string
    secondaryBorder: string
    secondaryBackground: string
    thirdBackground: string
    forthBackground: string
    secondaryText: string
    thirdText: string
    modal: string
    notification: string
    backgroundLightBlue: string
  }
}

export const themeLight: CustomTheme = {
  dark: false,
  colors: {
    primary: COLORS.blue,
    background: COLORS.gray6,
    card: COLORS.white,
    text: COLORS.gray5,
    border: COLORS.gray2,
    error: COLORS.red,
    success: COLORS.green,
    warning: COLORS.orange,
    waiting: COLORS.yellow,
    disable: COLORS.gray6,
    secondaryCard: COLORS.gray1,
    secondaryBorder: COLORS.gray1,
    secondaryBackground: COLORS.gray6,
    thirdBackground: COLORS.gray2,
    forthBackground: COLORS.gray1,
    secondaryText: COLORS.gray4,
    thirdText: COLORS.gray3,
    modal: COLORS.white,
    notification: COLORS.yellow,
    backgroundLightBlue: COLORS.lightBlue,
  },
}

export const themeDark: CustomTheme = {
  dark: true,
  colors: {
    primary: COLORS.blue,
    background: COLORS.black,
    card: COLORS.black1,
    text: COLORS.white,
    border: COLORS.gray3,
    error: COLORS.red,
    success: COLORS.green,
    warning: COLORS.orange,
    waiting: COLORS.yellow,
    disable: COLORS.gray3,
    secondaryCard: COLORS.gray4,
    secondaryBorder: COLORS.gray4,
    secondaryBackground: COLORS.gray5,
    thirdBackground: COLORS.gray3,
    secondaryText: COLORS.gray2,
    forthBackground: COLORS.gray5,
    thirdText: COLORS.gray3,
    modal: COLORS.gray5,
    notification: COLORS.yellow,
    backgroundLightBlue: COLORS.darkGray,
  },
}

export const useCustomTheme = () => {
  const theme = useTheme()
  return theme.dark ? themeDark : themeLight
}
