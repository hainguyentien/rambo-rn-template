import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import store, { persistor } from '@Redux/store'
import App from './App'
import ToastProvider from './ToastProvider'
import GateKeeper from './GateKeeper'
import { PersistGate } from 'redux-persist/integration/react'

export default function AppProvider() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          {/* persist gate of redux persist to ensure all persisted data loaded */}
          <PersistGate loading={null} persistor={persistor}>
            {/* bottom sheet provider, have to inside redux to make redux provider affect */}
            {/* <BottomSheetModalProvider> */}
            {/* code push handler for OTA update */}
            {/* <CodePushProvider> */}
            {/* gate keeper to prevent async loading side effects */}
            <GateKeeper>
              {/* authorization provider helps tracking auth data and process auth */}
              {/* <AuthorizationProvider> */}
              {/* app main with permission and soft update check */}
              <App />
              {/* </AuthorizationProvider> */}
            </GateKeeper>
            {/* </CodePushProvider> */}
            {/* </BottomSheetModalProvider> */}
          </PersistGate>
        </ReduxProvider>
        {/* toast provider */}
        <ToastProvider />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
