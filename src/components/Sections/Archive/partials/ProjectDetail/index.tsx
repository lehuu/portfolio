import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import Styled from './style';

interface ProjectDetailProps {
  company?: string;
  description?: string;
  techstack?: string[];
  image: FluidObject | FluidObject[];
}

const ProjectDetail: React.FunctionComponent<ProjectDetailProps> = ({
  company,
  image,
  description,
  techstack,
}) => (
  <Styled.DetailsContainer>
    {description ? (
      <>
        <Styled.ImageContainer>
          <Img fluid={image} alt="Project Image" />
        </Styled.ImageContainer>
        <Styled.TextContainer>
          {company && <Styled.CompanyContainer>Made at: {company}</Styled.CompanyContainer>}
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {techstack && (
            <Styled.TechList>
              {techstack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </Styled.TechList>
          )}
        </Styled.TextContainer>
      </>
    ) : (
      <Styled.NoDetailsContainer>No description available</Styled.NoDetailsContainer>
    )}
  </Styled.DetailsContainer>
);

export default ProjectDetail;
