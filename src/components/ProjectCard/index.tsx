import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import IconLink from '@components/IconLink';
import Styled from './style';

interface ProjectCardProps {
  title?: string;
  description?: string;
  techstack?: string[];
  image: FluidObject | FluidObject[];
  imagePosition?: 'left' | 'right';
  links?: { type: string; link: string }[];
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  image,
  techstack,
  imagePosition = 'left',
  links,
}) => (
  <Styled.CardContainer imagePosition={imagePosition}>
    <Styled.ImageContainer hasShadow>
      <Img fluid={image} alt="Project Image" />
    </Styled.ImageContainer>
    <Styled.RoundedContainer>
      <Styled.TextContainer>
        <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
        {/* eslint-disable-next-line react/no-danger */}
        <span dangerouslySetInnerHTML={{ __html: description }} />
        <Styled.TechList>
          {techstack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </Styled.TechList>
        <Styled.LinkContainer>
          {links?.map((link) => (
            <li key={link.link}>
              <IconLink
                size="l"
                type={
                  link.type.toLocaleLowerCase() === 'github' ? 'githubOutline' : (link.type as any)
                }
                link={link.link}
              />
            </li>
          ))}
        </Styled.LinkContainer>
      </Styled.TextContainer>
    </Styled.RoundedContainer>
  </Styled.CardContainer>
);

export default ProjectCard;
