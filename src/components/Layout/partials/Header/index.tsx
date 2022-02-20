import * as React from 'react';
import { useSiteMetadata } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import ThemeSwitchButton from '../../../ThemeSwitchButton';
import Styled from './style';

const HEADER_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/resume/index.md/" }) {
      frontmatter {
        title
        link
      }
    }
  }
`;

const Header: React.FunctionComponent = () => {
  const { title } = useSiteMetadata();

  const {
    markdownRemark: {
      frontmatter: { link },
    },
  } = useStaticQuery(HEADER_QUERY);

  return (
    <Styled.Header>
      <Styled.Navigation>
        <div>
          <Styled.Title to="/">{title}</Styled.Title>
        </div>

        <Styled.ButtonContainer>
          <Styled.DownloadLink href={link} target="_blank">
            Résumé
          </Styled.DownloadLink>
        </Styled.ButtonContainer>
      </Styled.Navigation>
      <ThemeSwitchButton />
    </Styled.Header>
  );
};

export default Header;
