import { createContext, useContext } from 'react';

export type AppContextProps = {
  isLoading: boolean,
  setIsLoading: (value: boolean) => void
}

const defaultContext = {
    isLoading: false,
    setIsLoading: () => {
  },
};

const AppContext = createContext<AppContextProps>(defaultContext);

export const ContextProvider = AppContext.Provider;

export const useAppContext = () => useContext(AppContext);

export default AppContext;