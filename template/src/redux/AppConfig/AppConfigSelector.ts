import { RootState } from '@Redux/store'

export const themeSelector = (state: RootState) => state.appConfig.theme

export const languageSelector = (state: RootState) => state.appConfig.language

export const appLoadingSelector = (state: RootState) =>
  state.appConfig.appLoading

export const currentScreenSelector = (state: RootState) =>
  state.appConfig.currentScreen
