import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@styles';

export enum Theme {
  LIGHT,
  DARK,
}

export const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
} | null>(null);

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.LIGHT);

  const contextValue = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <StyledThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
