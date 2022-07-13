import React from 'react'
import { Modal, Typography } from '@components'
import { useModals } from '@hooks'

const ModalsDisplayer = () => {
  const { modalsState, updateLocationDisclaimer } = useModals()

  return (
    <>
      <Modal
        variant='locationDisclaimer'
        visible={modalsState.locationDisclaimer.visible}
        onRequestClose={() => updateLocationDisclaimer(false)}
      />
    </>
  )
}

export default ModalsDisplayer