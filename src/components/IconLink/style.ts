import Mail from '@icons/mail.svg';
import LinkedIn from '@icons/linkedin.svg';
import Github from '@icons/github.svg';
import Instagram from '@icons/instagram.svg';
import ExternalLink from '@icons/external-link.svg';
import { mixinTransitionOld } from '@styles';
import styled, { css } from 'styled-components';

const commonIconStyle = css`
  height: ${({ theme }) => theme.font.size.xl};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.font.color.highlight};
  }
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

const Anchor = styled.a`
  display: inline-block;
  height: ${({ theme }) => theme.font.size.xl};
  ${mixinTransitionOld('color')}
  color: ${({ theme }) => theme.font.color.strong};

  &:hover {
    transition: none !important;
  }
`;

export default { Anchor, MailIcon, LinkedInIcon, GithubIcon, InstagramIcon, ExternalLinkIcon };
