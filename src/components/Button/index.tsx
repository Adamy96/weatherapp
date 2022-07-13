import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Typography } from '@components'
import { colors, spacing } from '@styles'

const Button = (props: Props) => {
  const { text, variant } = props

  return (
    <Pressable
      accessible={true}
      accessibilityLabel={props.accessibilityLabel}
      onPress={props.onPress}
      style={({ pressed }) => [styles(pressed).button, styles(pressed)[variant]]}
    >
      <Typography size={16} color={colors.white} weight='700'>
        {text}
      </Typography>
    </Pressable>
  )
}

const styles = (pressed: boolean) => StyleSheet.create({
  button: {
    minHeight: 32,
    minWidth: 190,
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: spacing.default1,
    paddingRight: spacing.default1,
    transform: pressed ? [{ scale: 0.98 }] : [{ scale: 1 }]
  },
  green: {
    backgroundColor: pressed ? colors.pressedGreen : colors.green,
    borderRadius: 4,
  },
  blue: {
    backgroundColor: pressed ? colors.pressedBlue : colors.blue,
    borderRadius: 16
  }
})

interface Props {
  accessibilityLabel: string
  text: string
  disabled?: boolean
  onPress(): any
  variant: 'green' | 'blue'
}

export default Button