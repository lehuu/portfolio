import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinTransition, breakpoints } from '@styles';

interface OverflowProps {
  hasOverflow?: boolean;
}

const Container = styled.div<OverflowProps>`
  position: relative;
  width: calc(100% + ${({ theme, hasOverflow }) => (hasOverflow ? theme.space.xl : '0px')});
  margin: 0 ${({ theme, hasOverflow }) => (hasOverflow ? `calc(-${theme.space.xl} / 2)` : 0)};
  margin-bottom: ${({ theme }) => theme.space.l};

  @media ${breakpoints.tablet} {
    width: 100%;
    margin: 0;
    max-width: 22ch;
    flex: 1 1 fit-content;
  }
`;

const TabContainer = styled.div<OverflowProps>`
  display: flex;
  position: relative;
  align-items: start;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-x: auto;
  padding: 0 ${(props) => (props.hasOverflow ? '40px' : 0)};
  @media ${breakpoints.tablet} {
    flex-direction: column;
    padding: 0;
  }

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

interface ScrollButtonProps {
  alignment: 'start' | 'end';
}

const ScrollButton = styled.button<ScrollButtonProps>`
  padding: 0;
  color: ${({ theme }) => theme.colors.textStrong};
  position: absolute;
  height: 44px;
  width: 40px;
  top: 0;
  z-index: 1;

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

  ${mixinTransition(['background', 'color'])}

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

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

interface TabletActiveTabIndicatorProps {
  height: number;
  heightOffset: number;
}

const TabletActiveTabIndicator = styled.div<TabletActiveTabIndicatorProps>`
  display: none;
  position: absolute;
  width: 2px;
  left: 0;
  top: 0;
  height: ${(props) => `${props.height}px`};
  transform: translateY(${(props) => `${props.heightOffset}px`});
  ${mixinTransition(['height', 'transform'], 'ease')}
  transition-delay: 0.2s;
  background: ${({ theme }) => theme.colors.accent};

  @media ${breakpoints.tablet} {
    display: block;
  }
`;

interface MobileActiveTabIndicatorProps {
  width: number;
  widthOffset: number;
}

const MobileActiveTabIndicator = styled.div<OverflowProps & MobileActiveTabIndicatorProps>`
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  ${mixinTransition(['width', 'transform'], 'ease')}
  transition-delay: 0.2s;
  margin: 0 ${(props) => (props.hasOverflow ? '40px' : 0)};
  background: ${({ theme }) => theme.colors.accent};
  width: ${(props) => `${props.width}px`};
  transform: translateX(${(props) => `${props.widthOffset}px`});

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

interface TabProps {
  isSelected?: boolean;
}

const Tab = styled.button<TabProps>`
  font-size: inherit;
  border-radius: ${(props) => props.theme.radii.regular};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.m};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.borders.regular};

  ${mixinTransition(['color', 'background'], 'ease')}

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

  @media ${breakpoints.tablet} {
    padding: ${(props) => props.theme.space.m};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-align: start;
    border-radius: ${(props) => props.theme.radii.regular};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: unset;
    border-left: 2px solid ${(props) => props.theme.borders.regular};
  }
`;

export default {
  Container,
  TabContainer,
  Tab,
  ScrollButton,
  TabletActiveTabIndicator,
  MobileActiveTabIndicator,
};
