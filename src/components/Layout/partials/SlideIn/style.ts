import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SlideInContainerProps {
  isOpen: boolean;
}

const SlideInContainer = styled.div<SlideInContainerProps>`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 310px;

  ${(props) =>
    props.isOpen
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `}

  background-color: ${(props) => props.theme.colors.background};
`;

export default { SlideInContainer };
