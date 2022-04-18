import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import IconLink from '@components/IconLink';
import extractProjectLink from '@utils/extractProjectLink';
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
}) => {
  const imageElement = (
    <Styled.ImageContainer hasShadow>
      <a href={extractProjectLink(links || []) || undefined} target="_blank" rel="noreferrer">
        <Img fluid={image} alt="Project Image" />
      </a>
    </Styled.ImageContainer>
  );

  const textElement = (
    <Styled.TextContainer>
      {title && (
        <Styled.ProjectTitle>
          <Styled.ProjectTitleLink
            href={extractProjectLink(links || []) || undefined}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </Styled.ProjectTitleLink>
        </Styled.ProjectTitle>
      )}
      {/* eslint-disable-next-line react/no-danger */}
      {description && <span dangerouslySetInnerHTML={{ __html: description }} />}
      {techstack && (
        <Styled.TechList>
          {techstack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </Styled.TechList>
      )}
      {links && (
        <Styled.LinkContainer>
          {links.map((link) => (
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
      )}
    </Styled.TextContainer>
  );
  return (
    <Styled.CardContainer imagePosition={imagePosition}>
      {imagePosition === 'left' ? (
        <>
          {imageElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {imageElement}
        </>
      )}
    </Styled.CardContainer>
  );
};

export default ProjectCard;
