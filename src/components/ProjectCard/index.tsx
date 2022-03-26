import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import Img, { FluidObject } from 'gatsby-image';
import Styled from './style';

interface ProjectCardProps {
  title?: string;
  description?: string;
  techstack?: string[];
  image: FluidObject | FluidObject[];
  imagePosition?: 'left' | 'right';
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  image,
  techstack,
  imagePosition = 'left',
}) => {
  return (
    <Styled.RoundedContainer hasShadow>
      <Img fluid={image} alt="Project Image" />
    </Styled.RoundedContainer>
  );
};

export default ProjectCard;
