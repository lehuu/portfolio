import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle, THEME_TRANSITION_TIME, THEME_TRANSITION_VAR } from '@styles';
import { useSiteMetadata } from '@hooks';
import { useLocation } from '@reach/router';
import { Footer, Header } from './partials';
import Styled from './style';

interface LayoutProps {
  additionalTitle?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ additionalTitle, children }) => {
  const { title, lang, siteUrl, description, image } = useSiteMetadata();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove('no-scroll');
      document.body.parentElement!.style.scrollBehavior = 'auto';

      const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
      window.scrollTo(0, scrollY);

      document.body.parentElement!.style.scrollBehavior = 'smooth';
    } else {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.classList.add('no-scroll');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.documentElement.style.setProperty(THEME_TRANSITION_VAR, THEME_TRANSITION_TIME);
    setIsClient(true);
  }, []);

  useEffect(() => {
    const gatsbyFocusWrapper = document.getElementById('gatsby-focus-wrapper');
    if (gatsbyFocusWrapper) {
      gatsbyFocusWrapper.removeAttribute('tabIndex');
    }
  }, []);

  const imageUrl = `${siteUrl}${image}`;
  const path = `${siteUrl}${pathname}`;

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
        <link rel="canonical" href={path} />
        <meta name="description" content={description} />

        <meta name="image" content={imageUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={path} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
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
