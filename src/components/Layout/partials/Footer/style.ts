import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, contentWidth } from '@styles';
import { Link } from 'gatsby';

const Footer = styled.footer`
  width: 100%;
  padding-top: 0;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.space.none} ${theme.space.l} ${theme.space.s}`};
  border-top: 1px solid ${({ theme }) => theme.borders.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const WidthContainer = styled.div`
  max-width: ${contentWidth.footer};
  width: 100%;

  > * {
    text-align: center;
    margin-top: ${({ theme }) => theme.space.s};
  }

  @media ${breakpoints.mobileL} {
    display: flex;
    justify-content: space-between;

    > * {
      flex: 1 1 100%;
    }

    > *:last-child {
      text-align: end;
    }
    > *:first-of-type {
      text-align: left;
    }
  }
`;

const commonLinkStyle = css`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const NoBreakSpan = styled.span`
  display: inline-block;
`;

const ExternalLink = styled.a`
  ${commonLinkStyle}
`;

const InternalLink = styled(Link)`
  ${commonLinkStyle}
`;

export default { Footer, ExternalLink, InternalLink, NoBreakSpan, WidthContainer };
