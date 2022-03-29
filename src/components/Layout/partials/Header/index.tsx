import React from 'react';
import { useSiteMetadata } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import ThemeSwitchButton from '@components/ThemeSwitchButton';
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

const navItems = [
  { label: 'About', to: '/#about' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
];

const Header: React.FunctionComponent = () => {
  const hash = typeof window !== 'undefined' ? `/${window.location.hash}` : '';
  const { title } = useSiteMetadata();

  const {
    markdownRemark: {
      frontmatter: { link },
    },
  } = useStaticQuery(HEADER_QUERY);

  return (
    <Styled.Header>
      <Styled.WidthContainer>
        <Styled.Navigation>
          <div>
            <Styled.Title to="/">{title}</Styled.Title>
          </div>
          <Styled.LinkList>
            {navItems.map((item) => (
              <li key={item.label}>
                <Styled.NavLink isActive={hash === item.to} to={item.to}>
                  {item.label}
                </Styled.NavLink>
              </li>
            ))}
          </Styled.LinkList>
          <Styled.ButtonContainer>
            <Styled.DownloadLink href={link} target="_blank">
              Résumé
            </Styled.DownloadLink>
          </Styled.ButtonContainer>
        </Styled.Navigation>
        <ThemeSwitchButton />
      </Styled.WidthContainer>
    </Styled.Header>
  );
};

export default Header;
