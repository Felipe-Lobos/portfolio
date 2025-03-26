/* eslint-disable react/prop-types */
import { useTheme } from "@heroui/use-theme";
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme("dark");
  const toggleTheme = () => {
    if(theme==='dark'){
        setTheme('light');
    }else{
        setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
