import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const commonStyle = (theme: Theme) => css`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover,
  &:active,
  &:focus-visible {
    outline: none;
    &::before {
      z-index: -1;
      width: 100%;
      background: ${theme.colors.hoverBg};
      position: absolute;
      border-radius: ${theme.radii.regular};
      padding: ${`${theme.space.xs} ${theme.space.m}`};
      top: -${theme.space.xs};
      left: -${theme.space.m};
      width: 100%;
      height: 100%;
      content: '';
    }
  }
`;

export const StyledInternalLink = styled(Link)`
  ${(props) => commonStyle(props.theme)}
`;

export const StyledExternalLink = styled.a`
  ${(props) => commonStyle(props.theme)}
`;
