import * as React from 'react';
import HamburgerIcon from '@icons/hamburger.svg';
import Styled from './style';

const navItems = [
  { label: 'About', to: '/#about' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
];

const resumeLink = {
  label: 'Résumé',
  to: 'https://files.bytecruncher.com/documents/Phuoc_Le_CV.pdf',
};

const Header: React.FunctionComponent = () => {
  const hash = typeof window !== 'undefined' ? `/${window.location.hash}` : '';

  return (
    <Styled.Header>
      <Styled.Navigation>
        <div>
          <Styled.Title to="/">Phuoc Le</Styled.Title>
        </div>
        <Styled.LinkList>
          {navItems.map((item) => (
            <li key={item.label}>
              <Styled.NavLink $isActive={hash === item.to} to={item.to}>
                {item.label}
              </Styled.NavLink>
            </li>
          ))}
        </Styled.LinkList>
        <Styled.ButtonContainer>
          <Styled.MenuButton aria-label="menu">
            <HamburgerIcon />
          </Styled.MenuButton>
          <Styled.DownloadLink href={resumeLink.to} target="_blank">
            {resumeLink.label}
          </Styled.DownloadLink>
        </Styled.ButtonContainer>
      </Styled.Navigation>
    </Styled.Header>
  );
};

export default Header;
