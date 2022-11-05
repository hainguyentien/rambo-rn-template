import Box from '@Components/Box'
import { Text } from '@Components/Text'
import { useCustomTheme } from '@Configs/themes'
import React from 'react'
import { SafeAreaView } from 'react-native'

const Global = () => {
  const { colors } = useCustomTheme()

  return (
    <SafeAreaView>
      <Box>
        <Text>On development</Text>
      </Box>
    </SafeAreaView>
  )
}

export default Global
