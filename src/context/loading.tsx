import React, { createContext, useState } from 'react'

interface ILoadingState {
  fullPageLoading: boolean
}

interface IContextState {
  loadingState: ILoadingState
  setLoadingState: React.Dispatch<React.SetStateAction<ILoadingState>>
}

export const initialState: ILoadingState = {
  fullPageLoading: false
}

export const LoadingContext = createContext<IContextState>(null)

const LoadingContextProvider = ({ children }: any) => {
  const [loadingState, setLoadingState] = useState<ILoadingState>(initialState)

  return (
    <LoadingContext.Provider
      value={{
        loadingState,
        setLoadingState
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider
