import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { themeDark, themeLight } from '@Configs/themes'
import React from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '@Redux/AppConfig/AppConfigSelector'
import { MODALS, ROUTES } from '@Routes/names'
import { RootStackParamsList } from '@Routes/params-lists'
import Global from '@Screens/modals/Global'
import Welcome from '@Screens/Welcome'
import { MODAL_BEHAVIOR, STACK_OPTIONS } from './config'

const Stack = createNativeStackNavigator<RootStackParamsList>()

export const RootStack = () => {
  const theme = useSelector(themeSelector)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.WELCOME} component={Welcome} />
      {/* modals */}
      <Stack.Group
        screenOptions={{
          ...STACK_OPTIONS,
          headerShown: false,
          presentation: MODAL_BEHAVIOR,
        }}>
        <Stack.Screen name={MODALS.GLOBAL} component={Global} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
