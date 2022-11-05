import { themeDark, themeLight } from '@Configs/themes'
import { NavigationContainer } from '@react-navigation/native'
import { themeSelector } from '@Redux/AppConfig/AppConfigSelector'
import { setCurrentScreen } from '@Redux/AppConfig/AppConfigSlice'
import { RootStack } from '@Routes/Stacks/RootStack'
import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dev_Watermark from './DevWatermark'
import { navigationRef } from './Navigation.ref'

const App = () => {
  const routeNameRef = useRef('')
  const dispatch = useDispatch()
  const theme = useSelector(themeSelector)

  const onNavigationReady = useCallback(() => {
    const currentRouteName = navigationRef?.getCurrentRoute()?.name ?? ''
    console.log(
      '🚀 ~ file: App2.tsx ~ line 75 ~ onNavigationReady ~ currentRouteName',
      currentRouteName,
    )
    routeNameRef.current = currentRouteName
    dispatch(setCurrentScreen(currentRouteName))
    // frame().then(() => {
    //   RNBootSplash.hide({ fade: true });
    // });
  }, [])

  const onNavigationStateChange = useCallback(() => {
    // console.log('NAV STATE', JSON.stringify(state));
    const previousRouteName = routeNameRef.current
    const currentRouteName = navigationRef?.getCurrentRoute()?.name
    console.log(
      '🚀 ~ file: App2.tsx ~ line 86 ~ onNavigationStateChange ~ currentRouteName',
      currentRouteName,
    )

    if (previousRouteName !== currentRouteName) {
    }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName ?? ''
    dispatch(setCurrentScreen(currentRouteName ?? ''))
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavigationReady}
      onStateChange={onNavigationStateChange}
      theme={theme === 'light' ? themeLight : themeDark}>
      <RootStack />
      {/* dev watermark to show current screen */}
      {!!__DEV__ && <Dev_Watermark />}
      {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
    </NavigationContainer>
  )
}

export default App
