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
    transform: translateX(-50%) rotateZ(0deg);
    scale: 0.2;
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) rotateZ(-360deg);
    scale: 1;
  }
`;

const IconContainer = styled.div<IconProps>`
  position: absolute;
  top: 0;
  left: 50%;
  height: inherit;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? 'translateX(-50%) rotateZ(0deg)' : 'translateX(-50%) rotateZ(-360deg)'};
  scale: ${(props) => (props.isVisible ? 1 : 0.2)};
  line-height: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: 0.25s linear 0s 1 ${rotateIn};
    `};
  ${mixinTransition('all')}
  svg {
    color: ${({ theme }) => theme.colors.accent};
    height: inherit;
  }
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
