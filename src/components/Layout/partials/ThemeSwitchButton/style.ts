import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, mixinTransition } from '@styles';

interface IconProps {
  readonly isVisible: boolean;
}

const rotateIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    transform: rotateZ(0deg);
    scale: 0.2;
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: rotateZ(-360deg);
    scale: 1;
  }
`;

const IconContainer = styled.div<IconProps>`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'rotateZ(0deg)' : 'rotateZ(-360deg)')};
  scale: ${(props) => (props.isVisible ? 1 : 0.2)};
  position: absolute;
  top: ${({ theme }) => theme.space.xs};
  line-height: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: 0.25s linear 0s 1 ${rotateIn};
    `};
  ${mixinTransition('all')}
  svg {
    height: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.themeSwitcher.iconColor};

    @media ${breakpoints.tablet} {
      height: ${({ theme }) => theme.fontSizes.l};
    }
  }
`;

const Button = styled.button`
  position: relative;
  height: ${({ theme }) => theme.fontSizes.xl};
  width: ${({ theme }) => theme.fontSizes.xl};
  box-sizing: content-box;
  padding: ${({ theme }) => theme.space.xs};
  background: ${({ theme }) => theme.colors.themeSwitcher.backgroundColor};
  border-radius: ${({ theme }) => theme.radii.regular};

  @media ${breakpoints.tablet} {
    height: ${({ theme }) => theme.fontSizes.l};
    width: ${({ theme }) => theme.fontSizes.l};
  }

  :hover,
  :active {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.themeSwitcher.hoverBgColor};
  }
`;

export default { Button, IconContainer };