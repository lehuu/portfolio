import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import Styled from './style';

interface ProjectDetailProps {
  description: string;
  image: FluidObject | FluidObject[];
}

const ProjectDetail: React.FunctionComponent<ProjectDetailProps> = ({ image, description }) => (
  <Styled.DetailsContainer>
    <Styled.ImageContainer>
      <Img fluid={image} alt="Project Image" />
    </Styled.ImageContainer>
    <Styled.TextContainer dangerouslySetInnerHTML={{ __html: description }} />
  </Styled.DetailsContainer>
);

export default ProjectDetail;
