import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme } from '@styles';
import Footer from './partials/Footer';
import Header from './partials/Header';

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
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
);

export default Layout;
