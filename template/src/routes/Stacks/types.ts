import {
  ParamListBase,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { NativeStackNavigationEventMap } from '@react-navigation/native-stack/lib/typescript/src/types'

export type NativeStackType = TypedNavigator<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  () => any
>
