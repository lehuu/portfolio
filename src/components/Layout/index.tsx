import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle, THEME_TRANSITION_TIME, THEME_TRANSITION_VAR } from '@styles';
import { useSiteMetadata } from '@hooks';
import { useColorMode } from 'theme-ui';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Styled from './style';

interface LayoutProps {
  additionalTitle?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ additionalTitle, children }) => {
  const { title, lang, siteUrl, description } = useSiteMetadata();
  const [colorMode] = useColorMode();

  useEffect(() => {
    document.documentElement.style.setProperty(THEME_TRANSITION_VAR, THEME_TRANSITION_TIME);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>
          {title}
          {additionalTitle ? ` - ${additionalTitle}` : ''}
        </title>
        <html lang={lang} />
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={description} />
      </Helmet>
      {colorMode && (
        <Styled.FlexContainer>
          <Header />
          <Styled.Main>{children}</Styled.Main>
          <Footer />
        </Styled.FlexContainer>
      )}
    </>
  );
};

export default Layout;
