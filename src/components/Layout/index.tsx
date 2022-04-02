import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle, THEME_TRANSITION_TIME, THEME_TRANSITION_VAR } from '@styles';
import { useSiteMetadata } from '@hooks';
import { Footer, Header } from './partials';
import Styled from './style';

interface LayoutProps {
  additionalTitle?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ additionalTitle, children }) => {
  const { title, lang, siteUrl, description } = useSiteMetadata();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(THEME_TRANSITION_VAR, THEME_TRANSITION_TIME);
    setIsClient(true);
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
        <meta charSet="utf-8" />
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={description} />
        <body className={isMenuOpen ? 'no-scroll' : ''} />
      </Helmet>
      <Styled.FlexContainer key={String(isClient)}>
        <Header isMenuOpen={isMenuOpen} onMenuClick={(isOpen) => setIsMenuOpen(!isOpen)} />
        <Styled.Main>{children}</Styled.Main>
        <Footer />
      </Styled.FlexContainer>
    </>
  );
};

export default Layout;
