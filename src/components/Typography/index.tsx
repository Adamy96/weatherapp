
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '@styles'

const Typography = (props: Props) => {
  const { children, style: customStyles = null } = props

  return (
    <Text style={[styles(props).typography, customStyles]}>
      {children}
    </Text>
  )
}

const styles = (props: Props) => StyleSheet.create({
  typography: {
    fontSize: props.size ? props.size : 14,
    fontWeight: props.weight ? props.weight : 'normal',
    textAlign: props.align ? props.align : 'left',
    textDecoration: props.decoration ? props.decoration : 'none',
    color: props.color ? props.color : colors.grey
  }
})

type SizeType = 12 | 14 | 16 | 24 | 112
type WeightType = '300' | '400' | '500' | '600' | '700'
type AlignType = 'auto' | 'left' | 'right' | 'center' | 'justify'
type DecorationType = 'none' | 'underline' | 'line-through' | 'underline line-through'
interface Props {
  children: string
  size?: SizeType
  weight?: WeightType
  color?: string
  align?: AlignType
  decoration?: DecorationType
  style?: any
}

export default Typography