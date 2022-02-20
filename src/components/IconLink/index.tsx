import React from 'react';
import Styled from './style';

const iconTypes = {
  github: Styled.GithubIcon,
  instagram: Styled.InstagramIcon,
  linkedin: Styled.LinkedInIcon,
  mail: Styled.MailIcon,
  external: Styled.ExternalLinkIcon,
};

interface IconLinkProps {
  type: string;
  link: string;
}

const IconLink: React.FunctionComponent<IconLinkProps> = ({ type, link }) => {
  if (!iconTypes[type]) {
    return null;
  }

  const Icon = iconTypes[type];

  return (
    <Styled.Anchor target="_blank" href={link}>
      <Icon />
    </Styled.Anchor>
  );
};

export default IconLink;
