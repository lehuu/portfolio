import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoints, mixinTransition } from '@styles';

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
    &:not(.menu-button-transition-enter-done),
    &:not(.menu-button-transition-exit-done) {
      ${visibleIcon(props)}
    }

    &.menu-button-transition-enter-done {
      ${visibleIcon(props)}
    }

    &.menu-button-transition-exit-done {
      ${invisibleIcon}
    }

    &.menu-button-transition-enter {
      ${invisibleIcon}
    }

    &.menu-button-transition-enter-active {
      ${visibleIcon(props)}
    }

    &.menu-button-transition-exit {
      ${visibleIcon(props)}
    }

    &.menu-button-transition-exit-active {
      ${invisibleIcon}
    }
  `}
`;

const Button = styled.button`
  position: relative;
  z-index: 999;
  height: ${({ theme }) => theme.fontSizes.l};
  width: ${({ theme }) => theme.fontSizes.l};

  @media ${breakpoints.tablet} {
    display: none;
  }

  :hover,
  :active {
    cursor: pointer;
  }
`;

export default { Button, IconContainer };
