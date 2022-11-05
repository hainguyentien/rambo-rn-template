import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { COLORS } from '@Configs/colors'
import { Platform } from 'react-native'
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context'

export const CONTENT_STYLE =
  Platform.OS === 'android'
    ? {
        // paddingTop: Screen.statusBarH,
        // marginTop: (Screen.statusBarH || 0) * 2,
      }
    : {}

export const SAFE_AREA_EDGES: Edge[] =
  Platform.OS === 'android'
    ? ['top', 'bottom']
    : ['left', 'right', 'top', 'bottom']

export const STACK_ANIMATION: NativeStackNavigationOptions['animation'] =
  Platform.OS === 'android' ? 'slide_from_right' : undefined

export const HEADER_TRANSLUCENT = Platform.OS === 'android' ? false : false

export const STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: Platform.OS === 'ios',
  headerTintColor: COLORS.aqua,
  headerBackTitle: '',
  animationTypeForReplace: 'push',
  headerStyle: {
    // backgroundColor: colors.OxfordBlue,
  },
}

export const FORM_STACK_OPTIONS: NativeStackNavigationOptions = {
  animation: 'fade_from_bottom',
}

export const useAuthorizedConfig = (hasBack: boolean) => ({
  contentStyle: {
    headerShow: hasBack,
    // backgroundColor: colors.OxfordBlue,
    paddingBottom: useSafeAreaInsets().bottom,
  },
})

export const MODAL_BEHAVIOR: NativeStackNavigationOptions['presentation'] =
  'modal'
