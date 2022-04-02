import styled from '@emotion/styled';
import { breakpoints, mixinTransition, contentWidth } from '@styles';
import { StyledExternalLink, StyledInternalLink } from '@components/Link';

const Header = styled.header`
  position: sticky;
  z-index: 500;
  top: 0;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.borders.regular};
  display: flex;
  justify-content: center;

  &:before {
    background-color: ${({ theme }) => theme.colors.background};
    ${mixinTransition('background-color')}
    content: '';
    opacity: 0.95;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

const WidthContainer = styled.div`
  max-width: ${contentWidth.navigationBar};
  width: 100%;
  position: relative;
`;

const Navigation = styled.nav`
  padding: ${({ theme }) => `${theme.space.m} ${theme.space.l}`};
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoints.tablet} {
    > * {
      flex: 1 1 100%;
    }
  }
`;

const Title = styled(StyledInternalLink)`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${mixinTransition('color')}
`;

const LinkList = styled.ul`
  display: none;
  font-size: ${({ theme }) => theme.fontSizes.s};
  gap: ${({ theme }) => theme.space.xl};
  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: center;
  }
`;

interface NavLinkProps {
  readonly isActive?: boolean;
}

const NavLink = styled(StyledInternalLink, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<NavLinkProps>`
  color: ${(props) => (props.isActive ? props.theme.colors.accent : props.theme.colors.textStrong)};
`;

const MenuButton = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  svg {
    height: 24px;
  }
  &:hover {
    cursor: pointer;
  }

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DownloadLink = styled(StyledExternalLink)`
  color: ${({ theme }) => theme.colors.accent};
  display: none;
  @media ${breakpoints.tablet} {
    display: block;
  }
`;

const ThemeButtonContainer = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.space.l};
  top: calc(100% + ${({ theme }) => theme.space.m});
  display: none;
  @media ${breakpoints.tablet} {
    display: block;
  }
`;

export default {
  Header,
  Navigation,
  Title,
  LinkList,
  MenuButton,
  DownloadLink,
  NavLink,
  WidthContainer,
  ButtonContainer,
  ThemeButtonContainer,
};
