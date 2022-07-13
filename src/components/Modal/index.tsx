import React from 'react'
import { Modal as ModalNative } from 'react-native'
import LocationDisclaimer from './LocationDisclaimer'

const Modal = (props: Props) => {
  const content = {
    locationDisclaimer: <LocationDisclaimer {...props} />
  }

  return (
    <ModalNative {...props}>
      {content[props.variant]}
    </ModalNative>
  )
}

interface Props {
  variant: 'locationDisclaimer'
  visible: boolean
  onRequestClose(): any
}

export default Modal