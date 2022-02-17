import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme } from '@styles';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Styled from './style';

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
    <Styled.FlexContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </Styled.FlexContainer>
  </ThemeProvider>
);

export default Layout;
