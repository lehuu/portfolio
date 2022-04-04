import React from 'react';
import { useSiteMetadata } from '@hooks';
import { graphql, useStaticQuery } from 'gatsby';
import { HashContext } from '@components/HashProvider';
import ThemeSwitchButton from '../ThemeSwitchButton';
import Styled from './style';
import HamburgerButton from '../HamburgerButton';
import SlideIn from '../SlideIn';

export const HEADER_QUERY = graphql`
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
  { label: 'About', to: '#about' },
  { label: 'Experience', to: '#experience' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
];

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuClick: (isOpen: boolean) => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ isMenuOpen, onMenuClick }) => {
  const { hash, disableScrollTracking } = React.useContext(HashContext);
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
            <Styled.Title to="/" onClick={disableScrollTracking}>
              {title}
            </Styled.Title>
          </div>
          <Styled.LinkList>
            {navItems.map((item) => (
              <li key={item.label}>
                <Styled.NavLink
                  isActive={hash === item.to}
                  to={item.to}
                  onClick={disableScrollTracking}
                >
                  {item.label}
                </Styled.NavLink>
              </li>
            ))}
          </Styled.LinkList>
          <Styled.ButtonContainer>
            <HamburgerButton isOpen={isMenuOpen} onClick={onMenuClick} />
            <Styled.DownloadLink href={link} target="_blank">
              Résumé
            </Styled.DownloadLink>
            <SlideIn
              isOpen={isMenuOpen}
              onRequestClose={() => onMenuClick(true)}
              links={navItems}
            />
          </Styled.ButtonContainer>
        </Styled.Navigation>
        <Styled.ThemeButtonContainer>
          <ThemeSwitchButton />
        </Styled.ThemeButtonContainer>
      </Styled.WidthContainer>
    </Styled.Header>
  );
};

export default Header;
