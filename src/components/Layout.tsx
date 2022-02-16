import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle, lightTheme } from '../styles';

interface LayoutProps {
  title: string;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ title, children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
        <html lang="en" />
      </Helmet>
      <header>
        <nav>dummy nav component</nav>
      </header>
      <main>{children}</main>
      <footer>dummy footer</footer>
    </ThemeProvider>
  );
};
