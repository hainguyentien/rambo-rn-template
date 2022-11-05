import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'

import { persistReducer, persistStore } from 'redux-persist'
import { reduxStorage } from '@Services/mmkv-storage'
import AppConfigReducer from './AppConfig/AppConfigSlice'

const combinedReducers = combineReducers({
  appConfig: AppConfigReducer,
})

const rootReducer = persistReducer(
  {
    key: 'rootReducerConfig',
    storage: reduxStorage,
    whitelist: [],
    // stateReconciler: seamlessImmutableReconciler,
    // transforms: [seamlessImmutableTransformCreator(transformerConfig)],
  },
  combinedReducers,
)

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
]

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

export default store
