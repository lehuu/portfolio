import styled, { css } from 'styled-components';
import { breakpoints } from '@styles';
import { Link } from 'gatsby';

const Footer = styled.footer`
  font-size: ${({ theme }) => theme.font.size.xs};

  border-top: 1px solid ${({ theme }) => theme.border.color.strong};
  margin: ${({ theme }) => theme.gaps.m};
  margin-top: 0;

  > * {
    text-align: center;
    margin-top: ${({ theme }) => theme.gaps.s};
  }

  @media ${breakpoints.tablet} {
    display: flex;
    justify-content: space-between;

    > * {
      flex: 1 1 100%;
    }

    > *:last-child {
      text-align: end;
    }
    > *:first-child {
      text-align: left;
    }
  }
`;

const commonLinkStyle = css`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  ${commonLinkStyle}
`;

const InternalLink = styled(Link)`
  ${commonLinkStyle}
`;

export default { Footer, ExternalLink, InternalLink };
