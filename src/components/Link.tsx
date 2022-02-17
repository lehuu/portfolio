import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const commonStyle = css`
  text-decoration: none;
  color: inherit;
  position: relative;

  &:hover {
    &::before {
      z-index: -1;
      width: 100%;
      background: ${({ theme }) => theme.border.hoverfill};
      position: absolute;
      border-radius: ${({ theme }) => theme.border.radius};
      padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps.m}`};
      top: -${({ theme }) => theme.gaps.s};
      left: -${({ theme }) => theme.gaps.m};
      width: 100%;
      height: 100%;
      content: '';
    }
  }
`;

export const StyledInternalLink = styled(Link)`
  ${commonStyle}
`;

export const StyledExternalLink = styled.a`
  ${commonStyle}
`;
