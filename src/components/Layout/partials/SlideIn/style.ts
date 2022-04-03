import { css } from '@emotion/react';
import styled from '@emotion/styled';
import breakpoints from '@styles/breakpoints';
import { THEME_TRANSITION_TIME } from '@styles/mixin-transition';

interface SlideInContainerProps {
  isOpen: boolean;
}

const SlideInContainer = styled.aside<SlideInContainerProps>`
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  width: min(75vw, 400px);
  transition: transform ${THEME_TRANSITION_TIME} ease;
  padding: ${({ theme }) => `${theme.space.xxxl} ${theme.space.xs}`};
  box-shadow: ${({ theme }) => theme.shadows.slideIn};

  ${(props) =>
    props.isOpen
      ? css`
          transform: translateX(0);
          height: 100vh;
        `
      : css`
          transform: translateX(100%);
          bottom: 0;
        `}

  background-color: ${(props) => props.theme.colors.background};

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

const Overlay = styled.div<SlideInContainerProps>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.overlay};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;

  ${(props) =>
    props.isOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export default { SlideInContainer, Overlay };
