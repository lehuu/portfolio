import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, mixinTransition } from '@styles';

export const TRANSITION_NAME = 'menu-button-transition';

interface IconProps {
  rotationDirection: 'cw' | 'ccw';
}

const visibleIcon = (props: IconProps) => css`
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%)
    ${props.rotationDirection === 'cw' ? 'rotateZ(-180deg)' : 'rotateZ(180deg)'};
  scale: 1;
`;

const invisibleIcon = css`
  visibility: hidden;
  opacity: 0;
  transform: translateX(-50%) rotateZ(0deg);
  scale: 0.8;
`;

const IconContainer = styled.div<IconProps>`
  position: absolute;
  top: 0;
  left: 50%;
  height: inherit;
  line-height: 0;
  ${mixinTransition('all')}
  svg {
    color: ${({ theme }) => theme.colors.accent};
    height: inherit;
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

const ClickArea = styled.div`
  height: calc(${({ theme }) => theme.fontSizes.l} * 2.5);
  width: calc(${({ theme }) => theme.fontSizes.l} * 2.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  position: relative;
  z-index: 999;
  height: ${({ theme }) => theme.fontSizes.l};
  width: ${({ theme }) => theme.fontSizes.l};
  box-sizing: content-box;

  @media ${breakpoints.tablet} {
    display: none;
  }

  :hover,
  :active {
    cursor: pointer;
  }
`;

export default { Button, IconContainer, ClickArea };
