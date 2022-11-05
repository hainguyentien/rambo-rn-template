import { COLORS } from '@Configs/colors'
import { fonts } from '@Configs/fonts'
import CommonFonts from '@Configs/responsive/CommonFonts'
import React from 'react'
import { StyleSheet } from 'react-native'
import Toast, { BaseToast, ToastConfig } from 'react-native-toast-message'

const TOAST_CONFIG: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      // renderLeadingIcon={() => <ImageLocal name="close_circle" />}
      text2Style={{
        fontSize: CommonFonts.res15,
        fontFamily: fonts.regular,
        color: COLORS.black,
      }}
      style={styles.success}
    />
  ),
  error: props => (
    <BaseToast
      {...props}
      // onTrailingIconPress={() => Toast.hide()}
      text2Style={{
        fontSize: CommonFonts.res15,
        fontFamily: fonts.regular,
        color: COLORS.black,
      }}
      style={{ borderLeftColor: COLORS.red }}
      // renderLeadingIcon={() => <ImageLocal name="successGreen" />}
    />
  ),
}

const styles = StyleSheet.create({
  success: {
    borderLeftColor: COLORS.green,
    borderLeftWidth: 5,
  },
  error: {
    borderLeftColor: COLORS.red,
    borderLeftWidth: 5,
  },
})

const ToastProvider = () => {
  return <Toast config={TOAST_CONFIG} />
}

export default React.memo(ToastProvider)
