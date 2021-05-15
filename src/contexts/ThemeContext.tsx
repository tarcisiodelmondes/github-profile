import { createContext, ReactNode, useEffect } from "react";

export const ThemeContext = createContext({});

type ThemeContextProviderProps = {
  children: ReactNode;
  theme: string;
};

export function ThemeContextProvider({
  children,
  theme,
}: ThemeContextProviderProps) {
  function saveTheme() {
    if (!theme) return (theme = "light");

    JSON.stringify(
      localStorage.setItem(
        "github-profile:theme",
        theme === "light" ? "light" : "dark"
      )
    );
  }

  useEffect(() => {
    saveTheme();
  }, [theme]);

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
}
