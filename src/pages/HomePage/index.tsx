import React from 'react'
import { View } from 'react-native'
import { Typography, Button } from '@components'
import { useModals } from '@hooks'

const HomePage = () => {
  const { updateLocationDisclaimer } = useModals()
  
  return (
    <View>
      <Typography>This is my HomePage</Typography>
      <Button text='openModalLocation' variant='blue' onPress={() => updateLocationDisclaimer(true)} accessibilityLabel=''/>
    </View>
  )
}

export default HomePage