import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@styles';
import { useLocalStorage } from 'usehooks-ts';

export const ThemeContext = React.createContext<{
  isDarkMode: boolean;
  toggle: () => void;
} | null>(null);

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>('dark-mode', false);

  const contextValue = React.useMemo(
    () => ({
      isDarkMode,
      toggle: () => {
        setDarkMode((prev) => !prev);
      },
    }),
    [isDarkMode]
  );

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
