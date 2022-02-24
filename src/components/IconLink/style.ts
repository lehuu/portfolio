import Mail from '@icons/mail.svg';
import LinkedIn from '@icons/linkedin.svg';
import Github from '@icons/github.svg';
import Instagram from '@icons/instagram.svg';
import ExternalLink from '@icons/external-link.svg';
import { mixinTransition } from '@styles';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const commonIconStyle = (theme: Theme) => css`
  height: ${theme.fontSizes.xl};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.accent};
  }
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

const Anchor = styled.a`
  display: inline-block;
  height: ${({ theme }) => theme.fontSizes.xl};
  ${mixinTransition('color')}
  color: ${({ theme }) => theme.colors.textStrong};

  &:hover {
    transition: none !important;
  }
`;

export default { Anchor, MailIcon, LinkedInIcon, GithubIcon, InstagramIcon, ExternalLinkIcon };
