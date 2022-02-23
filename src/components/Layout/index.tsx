import * as React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '@styles';
import { useSiteMetadata } from '@hooks';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Styled from './style';

interface LayoutProps {
  additionalTitle?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ additionalTitle, children }) => {
  const { title, lang, siteUrl, description } = useSiteMetadata();

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
      <Styled.FlexContainer>
        <Header />
        <Styled.Main>{children}</Styled.Main>
        <Footer />
      </Styled.FlexContainer>
    </>
  );
};

export default Layout;
