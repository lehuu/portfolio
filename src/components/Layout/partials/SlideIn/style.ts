import { StyledExternalLink, StyledInternalLink } from '@components/Link';
import styled from '@emotion/styled';
import breakpoints from '@styles/breakpoints';
import mixinTransition, { THEME_TRANSITION_TIME } from '@styles/mixin-transition';

const SlideInContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-bottom-left-radius: ${({ theme }) => theme.radii.large};
  border-top-left-radius: ${({ theme }) => theme.radii.large};
  top: 0;
  right: 0;
  width: min(75vw, 400px);
  transition: transform ${THEME_TRANSITION_TIME} ease,
    background-color ${THEME_TRANSITION_TIME} linear;
  padding: ${({ theme }) => `${theme.space.xxxl} ${theme.space.xs}`};
  box-shadow: ${({ theme }) => theme.shadows.slideIn};
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;

  &.slidein-menu-transition-enter {
    transform: translateX(100%);
  }

  &.slidein-menu-transition-enter-active {
    transform: translateX(0);
  }

  &.slidein-menu-transition-exit {
    transform: translateX(0);
  }

  &.slidein-menu-transition-exit-active {
    transform: translateX(100%);
  }

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.overlay};
  ${mixinTransition('background-color', 'opacity')}

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;

  &.overlay-transition-enter {
    opacity: 0;
  }

  &.overlay-transition-enter-active {
    opacity: 1;
  }

  &.overlay-transition-exit {
    opacity: 1;
  }

  &.overlay-transition-exit-active {
    opacity: 0;
  }

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const DownloadLink = styled(StyledExternalLink)`
  color: ${({ theme }) => theme.colors.accent};
`;

interface NavLinkProps {
  readonly isActive?: boolean;
}

const NavLink = styled(StyledInternalLink, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<NavLinkProps>`
  color: ${(props) => (props.isActive ? props.theme.colors.accent : props.theme.colors.textStrong)};
  ${mixinTransition('color')}
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.space.m};
  left: ${({ theme }) => theme.space.xl};
`;

const LinkList = styled.ul`
  li {
    margin-bottom: ${({ theme }) => theme.space.xl};
    text-align: center;
  }
  margin-bottom: ${({ theme }) => theme.space.xxl};
`;

export default { SlideInContainer, Overlay, NavLink, LinkList, DownloadLink, ButtonContainer };
