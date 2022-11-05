import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { themeDark, themeLight } from '@Configs/themes'
import React from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from '@Redux/AppConfig/AppConfigSelector'
import { ROUTES } from '@Routes/names'
import { AuthorizedStackParamsList } from '@Routes/params-lists'
import Splash from '@Screens/Splash'

const AuthorizedStack = createNativeStackNavigator<AuthorizedStackParamsList>()

export const RootNavigator = () => {
  const theme = useSelector(themeSelector)

  return (
    <AuthorizedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthorizedStack.Screen name={ROUTES.SPLASH} component={Splash} />
    </AuthorizedStack.Navigator>
  )
}
