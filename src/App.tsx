import React from 'react';
import { AppContextProvider } from './AppContextProvider'
import { Navigation, ModalsDisplayer } from '@components'

const App = () => {
  return (
    <AppContextProvider>
      <ModalsDisplayer />
      <Navigation />
    </AppContextProvider>
  );
};

export default App;
