import React from 'react';
import { Theme } from '@emotion/react';
import Styled from './style';

const iconTypes = {
  github: Styled.GithubIcon,
  githubOutline: Styled.GithubOutlineIcon,
  instagram: Styled.InstagramIcon,
  linkedin: Styled.LinkedInIcon,
  mail: Styled.MailIcon,
  external: Styled.ExternalLinkIcon,
};

interface IconLinkProps {
  type: keyof typeof iconTypes;
  link: string;
  size?: keyof Theme['fontSizes'];
}

const IconLink: React.FunctionComponent<IconLinkProps> = ({ type, link, size = 'm' }) => {
  const Icon = iconTypes[type];

  if (!Icon) {
    return null;
  }

  return (
    <Styled.Anchor target="_blank" href={link} aria-label={type} size={size}>
      <Icon />
    </Styled.Anchor>
  );
};

export default IconLink;
