import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme } from '../styles';

interface LayoutProps {
  title: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ title, children }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      <link rel="canonical" href="https://bytecruncher.com" />
      <meta
        name="description"
        content="Phuoc Le's personal portfolio website. Software Engineer."
      />
    </Helmet>
    <header>
      <nav>dummy nav component</nav>
    </header>
    <main>{children}</main>
    <footer>dummy footer</footer>
  </ThemeProvider>
);

export default Layout;
