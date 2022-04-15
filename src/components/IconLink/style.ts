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

const commonIconStyle = (theme: Theme) => css`
  height: inherit;
  cursor: pointer;
  ${mixinTransition(['color'])}

  &:hover,
  &:active {
    color: ${theme.colors.accent};
  }
`;

const GithubOutlineIcon = styled(GithubOutline)`
  ${(props) => commonIconStyle(props.theme)}
`;

const MailIcon = styled(Mail)`
  ${(props) => commonIconStyle(props.theme)}
`;

const LinkedInIcon = styled(LinkedIn)`
  ${(props) => commonIconStyle(props.theme)}
`;

const GithubIcon = styled(Github)`
  ${(props) => commonIconStyle(props.theme)}
`;

const InstagramIcon = styled(Instagram)`
  ${(props) => commonIconStyle(props.theme)}
`;

const ExternalLinkIcon = styled(ExternalLink)`
  ${(props) => commonIconStyle(props.theme)}
`;

const Anchor = styled.a<CommonIconProps>`
  display: inline-block;
  height: ${({ theme, size }) => theme.fontSizes[size]};
  ${mixinTransition(['color'])}
  color: ${({ theme }) => theme.colors.textStrong};

  &:hover {
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
