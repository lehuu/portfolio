import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import extractProjectLink from '@utils/extractProjectLink';
import { CSSTransition } from 'react-transition-group';
import { THEME_TRANSITION_TIME_MS } from '@styles/mixin-transition';
import Styled, { TRANSITION_NAME } from './style';

interface ProjectDetailProps {
  visible?: boolean;
  company?: string;
  description?: string;
  techstack?: string[];
  image?: FluidObject | FluidObject[];
  links?: { type: string; link: string }[];
}

const ProjectDetail: React.FunctionComponent<ProjectDetailProps> = ({
  visible,
  company,
  image,
  description,
  techstack,
  links,
}) => (
  <Styled.ProjectCardRow aria-hidden={!visible}>
    <td colSpan={5}>
      <CSSTransition in={visible} timeout={THEME_TRANSITION_TIME_MS} classNames={TRANSITION_NAME}>
        <Styled.TransitionContainer visible={visible}>
          <Styled.DetailsContainer>
            {description ? (
              <>
                {image && (
                  <Styled.ImageContainer>
                    <a
                      tabIndex={visible ? 0 : -1}
                      href={extractProjectLink(links || []) || undefined}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Img fluid={image} alt="Project Image" />
                    </a>
                  </Styled.ImageContainer>
                )}
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
        </Styled.TransitionContainer>
      </CSSTransition>
    </td>
  </Styled.ProjectCardRow>
);

export default ProjectDetail;
