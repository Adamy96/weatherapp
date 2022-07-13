import { useContext } from 'react'
import { LoadingContext } from '@context/loading'

const useLoading = () => {
  const { loadingState, setLoadingState } = useContext(LoadingContext)

  const updateFullPageLoading = (loading: boolean) => {
    setLoadingState({
      ...loadingState,
      fullPageLoading: loading
    })
  }

  return {
    loadingState,
    updateFullPageLoading,
    fullPageLoading: loadingState.fullPageLoading
  }
}

export default useLoading
