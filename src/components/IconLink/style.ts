import Mail from '@icons/mail.svg';
import LinkedIn from '@icons/linkedin.svg';
import Github from '@icons/github.svg';
import GithubOutline from '@icons/github-outline.svg';
import Instagram from '@icons/instagram.svg';
import ExternalLink from '@icons/external-link.svg';
import { mixinTransition } from '@styles';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

interface CommonIconProps {
  size: keyof Theme['fontSizes'];
}

const commonIconStyle = css`
  height: inherit;
  color: inherit;
  cursor: pointer;
`;

const GithubOutlineIcon = styled(GithubOutline)`
  ${commonIconStyle}
`;

const MailIcon = styled(Mail)`
  ${commonIconStyle}
`;

const LinkedInIcon = styled(LinkedIn)`
  ${commonIconStyle}
`;

const GithubIcon = styled(Github)`
  ${commonIconStyle}
`;

const InstagramIcon = styled(Instagram)`
  ${commonIconStyle}
`;

const ExternalLinkIcon = styled(ExternalLink)`
  ${commonIconStyle}
`;

const Anchor = styled.a<CommonIconProps>`
  display: inline-block;
  height: ${({ theme, size }) => theme.fontSizes[size]};
  ${mixinTransition(['color'])}
  color: ${({ theme }) => theme.colors.textStrong};

  &:hover,
  &:active,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
    transition: none !important;
  }
`;

export default {
  Anchor,
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  ExternalLinkIcon,
  GithubOutlineIcon,
};
