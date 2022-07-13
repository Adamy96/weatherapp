import { useContext } from 'react'
import { initialState, ModalsContext } from '@context/modals'

const useModals = () => {
  const { modalsState, setModalsState } = useContext(ModalsContext)

  const updateLocationDisclaimer = (visible: boolean) => {
    setModalsState({
      ...modalsState,
      locationDisclaimer: {
        visible
      }
    })
  }

  return {
    modalsState,
    updateLocationDisclaimer
  }
}

export default useModals
