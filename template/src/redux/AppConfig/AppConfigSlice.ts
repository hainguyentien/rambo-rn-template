import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AppTheme = 'light' | 'dark' | 'system'

export interface AppConfigStates {
  theme: AppTheme
  language: string
  appLoading: boolean
  currentScreen: string
}

const initialState: AppConfigStates = {
  theme: 'system',
  language: 'en',
  appLoading: true,
  currentScreen: '',
}

const AppConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<AppTheme>) => {
      state.theme = action.payload
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.appLoading = action.payload
    },
    setCurrentScreen: (state, action: PayloadAction<string>) => {
      state.currentScreen = action.payload
    },
  },
})

const AppConfigReducer = AppConfigSlice.reducer

export default AppConfigReducer

export const { setTheme, setLanguage, setLoading, setCurrentScreen } =
  AppConfigSlice.actions
