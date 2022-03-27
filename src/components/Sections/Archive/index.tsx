import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Project } from 'types';
import { ProjectTable } from './partials';
import Styled from './style';

const PROJECT_QUERY = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___featured], order: ASC }
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

const Archive: React.FunctionComponent = () => {
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
    endDate: new Date(edge.node.frontmatter.endDate),
    image: edge.node.frontmatter.picture.childImageSharp.fluid,
    links: edge.node.frontmatter.links,
  }));

  return (
    <Styled.Container>
      <Styled.OpenArchiveButton onClick={handleShowButton}>
        {isTableShown ? 'Hide' : 'Show'} All Projects
      </Styled.OpenArchiveButton>
      {isTableShown && (
        <Styled.ExpandableContainer>
          <SectionHeader title="All Projects" />
          <ProjectTable projects={content} />
        </Styled.ExpandableContainer>
      )}
    </Styled.Container>
  );
};

export default Archive;
