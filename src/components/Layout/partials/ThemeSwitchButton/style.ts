import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, mixinTransition } from '@styles';

export const TRANSITION_NAME = 'theme-button-transition';

const visibleIcon = (props: IconContainerProps) => css`
  visibility: visible;
  opacity: 1;
  transform: ${props.rotationDirection === 'cw' ? 'rotateZ(-360deg)' : 'rotateZ(360deg)'};
  scale: 1;
`;

const invisibleIcon = css`
  visibility: hidden;
  opacity: 0;
  transform: rotateZ(0deg);
  scale: 0.5;
`;

interface IconContainerProps {
  rotationDirection: 'cw' | 'ccw';
}

const IconContainer = styled.div<IconContainerProps>`
  position: absolute;
  top: ${({ theme }) => theme.space.xs};
  line-height: 0;
  ${mixinTransition(['all'])}
  svg {
    height: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.themeSwitcher.iconColor};
    ${mixinTransition(['color'])}

    @media ${breakpoints.tablet} {
      height: ${({ theme }) => theme.fontSizes.l};
    }
  }

  ${(props) => css`
    &:not(.${TRANSITION_NAME}-enter-done),
    &:not(.${TRANSITION_NAME}-exit-done) {
      ${visibleIcon(props)}
    }

    &.${TRANSITION_NAME}-enter-done {
      ${visibleIcon(props)}
    }

    &.${TRANSITION_NAME}-exit-done {
      ${invisibleIcon}
    }

    &.${TRANSITION_NAME}-enter {
      ${invisibleIcon}
    }

    &.${TRANSITION_NAME}-enter-active {
      ${visibleIcon(props)}
    }

    &.${TRANSITION_NAME}-exit {
      ${visibleIcon(props)}
    }

    &.${TRANSITION_NAME}-exit-active {
      ${invisibleIcon}
    }
  `}
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
