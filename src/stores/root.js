import React from 'react';
import { useLocalStore } from 'mobx-react';
import { createServerStore } from './server';
import { createUiStore } from './ui';

function createStore() {
  return {
    server: createServerStore(),
    ui: createUiStore()
  };
}

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('Must use StoreProvider to initialize the context!');
  }
  return store;
};
