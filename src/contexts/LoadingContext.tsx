import { createContext, ReactNode, useState } from "react";

type LoadingContextProps = {
  isLoading: boolean;
  toggleIsLoading: (arg: boolean) => void;
};

type LoadingContextProvider = {
  children: ReactNode;
};

export const LoadingContext = createContext({} as LoadingContextProps);

export function LoadingContextProvider({ children }: LoadingContextProvider) {
  const [isLoading, setIsLoading] = useState(false);

  function toggleIsLoading(arg: boolean) {
    setIsLoading(arg);
  }

  return (
    <LoadingContext.Provider value={{ isLoading, toggleIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
