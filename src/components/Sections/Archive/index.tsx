import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Project } from 'types';
import { CSSTransition } from 'react-transition-group';
import { THEME_TRANSITION_TIME_MS } from '@styles/mixin-transition';
import { SectionContainerProps } from '@components/SectionContainer';
import { ProjectTable } from './partials';
import Styled, { TABLE_TRANSITION } from './style';

const PROJECT_QUERY = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___endDate, frontmatter___startDate], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            startDate
            endDate
            name
            company
            techstack
            links {
              type
              link
            }
            picture {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

const Archive: React.FunctionComponent<Pick<SectionContainerProps, 'onInView'>> = ({
  onInView,
}) => {
  const { projects } = useStaticQuery<{ projects: { edges: { node: Project }[] } }>(PROJECT_QUERY);

  const [isTableShown, setIsTableShown] = useState(false);

  const handleShowButton = () => {
    setIsTableShown((curr) => !curr);
  };

  const content = projects.edges.map((edge) => ({
    name: edge.node.frontmatter.name,
    description: edge.node.html,
    company: edge.node.frontmatter.company,
    techstack: edge.node.frontmatter.techstack,
    endDate: edge.node.frontmatter.endDate ? new Date(edge.node.frontmatter.endDate) : new Date(),
    image: edge.node.frontmatter.picture?.childImageSharp.fluid,
    links: edge.node.frontmatter.links,
  }));

  return (
    <Styled.Container onInView={onInView}>
      <Styled.OpenArchiveButton onClick={handleShowButton}>
        {isTableShown ? 'Hide' : 'Show'} All Projects
      </Styled.OpenArchiveButton>
      <CSSTransition
        in={isTableShown}
        unmountOnExit
        timeout={THEME_TRANSITION_TIME_MS}
        classNames={TABLE_TRANSITION}
      >
        <Styled.ExpandableContainer>
          <SectionHeader title="All Projects" />
          <ProjectTable projects={content} />
        </Styled.ExpandableContainer>
      </CSSTransition>
    </Styled.Container>
  );
};

export default Archive;
