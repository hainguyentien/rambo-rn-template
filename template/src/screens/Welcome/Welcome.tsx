import { images } from '@Assets/images'
import Box from '@Components/Box'
import { Text } from '@Components/Text'
import CommonWidths from '@Configs/responsive/CommonWidths'
import { useCustomTheme } from '@Configs/themes'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native'

const Welcome = () => {
  const { colors } = useCustomTheme()
  const { t } = useTranslation()

  return (
    <Box color="#091826" alignItems="center" justifyContent="center" flex={1}>
      <Image
        source={images.LOGO}
        style={{ width: CommonWidths.p60, height: CommonWidths.p60 }}
      />
      <Text white bold h1>
        Welcome, Rambo
      </Text>
    </Box>
  )
}

export default Welcome
