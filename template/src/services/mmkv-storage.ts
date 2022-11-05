import { MMKV } from 'react-native-mmkv'
import { Storage } from 'redux-persist'

const AuthenticationStorage = new MMKV({
  id: 'authentication',
  encryptionKey: 'auth',
})

const NotificationStorage = new MMKV({
  id: 'notification',
  encryptionKey: 'noti',
})

const ReduxStorage = new MMKV({
  id: 'redux',
  encryptionKey: 'redux',
})

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    ReduxStorage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: key => {
    const value = ReduxStorage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: key => {
    ReduxStorage.delete(key)
    return Promise.resolve()
  },
}

const BasicStorage = new MMKV()

export function getAuthenticationData(key: string) {
  console.log(
    '----- getAuthenticationData',
    key,
    AuthenticationStorage.getString(key),
  )
  return AuthenticationStorage.getString(key)
}

export function setAuthenticationData(key: string, value: string) {
  console.log('----- setAuthenticationData', key, value)
  return AuthenticationStorage.set(key, value)
}

export function removeAuthenticationData(key: string) {
  console.log('----- removeAuthenticationData', key)
  AuthenticationStorage.delete(key)
}

export function clearAuthenticationData() {
  console.log('----- clearAuthenticationData')
  AuthenticationStorage.clearAll()
}

export function getNotificationData(key: string) {
  return NotificationStorage.getString(key)
}

export function setNotificationData(key: string, value: string) {
  return NotificationStorage.set(key, value)
}

export function getStringFromStorage(key: string) {
  return BasicStorage.getString(key) ?? ''
}

export function setStringToStorage(key: string, value: string) {
  return BasicStorage.set(key, value)
}

export function removeKeyFromStorage(key: string) {
  return BasicStorage.delete(key)
}
export function getBooleanFromStorage(key: string) {
  return BasicStorage.getBoolean(key)
}
export function setBooleanFromStorage(key: string, value: boolean) {
  return BasicStorage.set(key, value)
}
