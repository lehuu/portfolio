import styled from 'styled-components';
import { transparentize } from 'polished';
import { breakpoints, mixinTransition, contentWidth } from '@styles';
import { StyledExternalLink, StyledInternalLink } from '@components/Link';

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => transparentize(0.25, theme.backgroundColor)};
  border-bottom: 1px solid ${({ theme }) => theme.border.color.strong};
  ${mixinTransition('background-color')}
  display: flex;
  justify-content: center;
`;

const WidthContainer = styled.div`
  max-width: ${contentWidth.navigationBar};
  width: 100%;
  position: relative;
`;

const Navigation = styled.nav`
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 1 1 100%;
  }
`;

const Title = styled(StyledInternalLink)`
  color: ${({ theme }) => theme.font.color.strong};
  font-size: ${({ theme }) => theme.font.size.l};
  text-decoration: none;
  font-weight: 600;
  ${mixinTransition('color')}
`;

const LinkList = styled.ul`
  display: none;
  font-size: ${({ theme }) => theme.font.size.xs};
  gap: ${({ theme }) => theme.gaps.xl};
  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: center;
  }
`;

interface NavLinkProps {
  readonly $isActive?: boolean;
}

const NavLink = styled(StyledInternalLink)<NavLinkProps>`
  color: ${(props) =>
    props.$isActive ? props.theme.font.color.highlight : props.theme.font.color.strong};
`;

const MenuButton = styled.button`
  color: ${({ theme }) => theme.font.color.highlight};
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
  color: ${({ theme }) => theme.font.color.highlight};
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
};
