import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinTransition } from '@styles';

interface OverflowProps {
  hasOverflow?: boolean;
}

const Container = styled.div<OverflowProps>`
  position: relative;
  width: calc(100% + ${({ theme, hasOverflow }) => (hasOverflow ? theme.space.xl : '0px')});
  margin: 0 ${({ theme, hasOverflow }) => (hasOverflow ? `calc(-${theme.space.xl} / 2)` : 0)};
  margin-bottom: ${({ theme }) => theme.space.m};
`;

const TabContainer = styled.div<OverflowProps>`
  display: flex;
  overflow: hidden;
  padding: 0 ${(props) => (props.hasOverflow ? '40px' : 0)};
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
  top: 0;

  ${(props) =>
    props.alignment === 'start'
      ? css`
          left: 0;
          background-color: ${props.theme.colors.background};
        `
      : css`
          right: 0;
          background-color: ${props.theme.colors.background};
        `}

  ${mixinTransition('background', 'color')}

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
