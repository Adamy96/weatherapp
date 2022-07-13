import { LoadingProvider, ModalsProvider } from '@context'
import { combineComponents } from '@helper'

const providers = [LoadingProvider, ModalsProvider]
export const AppContextProvider = combineComponents(...providers)
