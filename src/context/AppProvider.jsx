/* eslint-disable react/prop-types */
import { ThemeProvider } from "./ThemeContext";
import { HeroUIProvider } from "@heroui/react";

export function AppProvider({children}){
    return(
        <HeroUIProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    )
}