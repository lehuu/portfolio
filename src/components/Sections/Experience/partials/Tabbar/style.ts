import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  width: calc(100% + ${({ theme }) => theme.space.xl});
  margin: 0 calc(-${({ theme }) => theme.space.xl} / 2); ;
`;

const TabContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0 40px;
`;

interface ScrollButtonProps {
  alignment: 'start' | 'end';
}

const ScrollButton = styled.button<ScrollButtonProps>`
  padding: 0;
  color: ${({ theme }) => theme.colors.textStrong};
  position: absolute;
  height: 42px;
  width: 40px;
  transition: background-color 0.05s linear;
  top: 0;

  ${(props) =>
    props.alignment === 'start'
      ? css`
          left: 0;
          background: linear-gradient(
            90deg,
            ${props.theme.colors.background} 70%,
            rgba(0, 0, 0, 0) 100%
          );
        `
      : css`
          right: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            ${props.theme.colors.background} 30%
          );
        `}

  > * {
    height: ${({ theme }) => theme.fontSizes.s};
  }

  &:disabled {
    opacity: 0.25;
    &:hover {
      cursor: not-allowed;
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    /* background-color: ${({ theme }) => theme.colors.hoverBg}; */
    color: ${({ theme }) => theme.colors.accent};
  }
`;

interface TabProps {
  isSelected?: boolean;
}
const Tab = styled.button<TabProps>`
  font-size: inherit;
  border-radius: ${(props) => props.theme.radii.regular};
  padding: ${(props) => props.theme.space.s};

  ${(props) =>
    props.isSelected
      ? css`
          color: ${props.theme.colors.accent};
          background: ${props.theme.colors.hoverBg};
        `
      : css`
          color: inherit;
        `}

  &:hover,
  &:active {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default { Container, TabContainer, Tab, ScrollButton };
