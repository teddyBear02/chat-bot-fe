import { useRouter } from "next/router";
import { createContext, SetStateAction, useState } from "react";
import { ContextProvider } from ".";

interface interfaceContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
}

const initalContext = {
  isLoading: false,
  setIsLoading: () => null,
};

export const GlobalContext = createContext<interfaceContext>(initalContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(initalContext.isLoading);

  const valueContext = {
    isLoading,
    setIsLoading,
  };

  return <ContextProvider value={valueContext}>{children}</ContextProvider>;
};
