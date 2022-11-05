import { navigationRef } from '$app/Navigation.ref'
import { StackActions, TabActions } from '@react-navigation/native'
import { ROUTES, TABS } from './names'
import { RootStackParamsList } from './params-lists'

function alertNavigationNotReady(name: string) {
  console.log(`Navigation is not ready yet. TARGET: ${name}`)
}

export function navigateTo(
  name: string,
  params?: RootStackParamsList[typeof name],
) {
  if (navigationRef.isReady()) {
    if (!name) {
      console.warn('NAVIGATE with no name', params)
      return
    }
    // Perform navigation if the app has mounted
    navigationRef.navigate(name, { navData: params })
  } else {
    alertNavigationNotReady(name)
  }
}

function nestedNavigateTo(
  name: string,
  parent: string,
  params?: RootStackParamsList[typeof name],
) {
  if (navigationRef.isReady()) {
    if (!name) {
      console.warn('NESTED NAVIGATE with no name', params)
      return
    }
    // Perform navigation if the app has mounted
    navigationRef.navigate(parent, {
      screen: name,
      params: { navData: params },
      // navData: params
    })
  } else {
    alertNavigationNotReady(name)
  }
}

export function refresh(params?: RootStackParamsList[string]) {
  if (navigationRef.isReady()) {
    navigationRef.setParams({ navData: params })
  } else {
    alertNavigationNotReady('REFRESH ACTION')
  }
}

export function replaceTo(
  name: string,
  params?: RootStackParamsList[typeof name],
) {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.dispatch(
      StackActions.replace(name, {
        navData: params,
      }),
    )
  } else {
    alertNavigationNotReady(name)
  }
}

function nestedReplaceTo(
  name: string,
  parent: string,
  params?: RootStackParamsList[typeof name],
) {
  if (navigationRef.isReady()) {
    if (!name) {
      console.warn('NESTED REPLACE with no name', params)
      return
    }
    // Perform navigation if the app has mounted
    navigationRef.dispatch(
      StackActions.replace(parent, {
        screen: name,
        params: { navData: params },
      }),
    )
  } else {
    alertNavigationNotReady(name)
  }
}

export function popNavigationToRoot() {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.dispatch(StackActions.popToTop())
  } else {
    alertNavigationNotReady('POP ROOT')
  }
}

export function jumpTo(tab: string, params?: RootStackParamsList[typeof tab]) {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.dispatch(TabActions.jumpTo(tab, { navData: params }))
  } else {
    alertNavigationNotReady(tab)
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.canGoBack() && navigationRef.goBack()
  } else {
    alertNavigationNotReady('goBack')
  }
}

export function resetNavigation(
  name: string,
  params?: RootStackParamsList[typeof name],
) {
  if (navigationRef.isReady()) {
    // Perform navigation if the app has mounted
    navigationRef.reset({
      index: 0,
      routes: [{ name, params: { navData: params } }],
    })
  } else {
    alertNavigationNotReady(`RESET ${name}`)
  }
}

export function getCurrentScreen() {
  const route = navigationRef.getCurrentRoute()
  return route?.name ?? ''
}

const NavigationActions = {
  navigateTo,
  replaceTo,
  popToRoot: popNavigationToRoot,
  jumpTo,
  goBack,
  resetNavigation,
  nestedNavigateTo,
  nestedReplaceTo,
}

export default NavigationActions
