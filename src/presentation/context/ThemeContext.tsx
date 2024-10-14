import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { lightColors, ThemeColors, darkColors } from '../../config/theme/theme';
import { useColorScheme } from "react-native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  isDark?: boolean;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    useEffect(() => {
        if (colorScheme === 'dark') {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }, [colorScheme]);

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{currentTheme: currentTheme, isDark: (currentTheme !== 'light'), colors: (currentTheme === 'light' ? lightColors : darkColors), setTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
