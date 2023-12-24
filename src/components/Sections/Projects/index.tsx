import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionContainerProps } from '@components/SectionContainer';
import { ProjectCard } from './partials';
import Styled from './style';

const PROJECT_QUERY = graphql`
  {
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/projects/" }
        frontmatter: { featured: { ne: null } }
      }
      sort: { frontmatter: { featured: ASC } }
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
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          html
        }
      }
    }
  }
`;

const Projects: React.FunctionComponent<Pick<SectionContainerProps, 'onInView'>> = ({
  onInView,
}) => {
  const { projects } = useStaticQuery(PROJECT_QUERY);

  const content = projects.edges.map((edge) => ({
    ...edge.node.frontmatter,
    descriptionHTML: edge.node.html,
  }));

  return (
    <Styled.Section id="projects" onInView={onInView}>
      <SectionHeader title="Featured Projects" />
      <Styled.CardContainer>
        {content.map((project, index) => (
          <ProjectCard
            key={`${project.name}${project.startDate}`}
            title={project.name}
            image={project.picture.childImageSharp.gatsbyImageData}
            imagePosition={index % 2 === 0 ? 'right' : 'left'}
            techstack={project.techstack}
            description={project.descriptionHTML}
            links={project.links}
          />
        ))}
      </Styled.CardContainer>
    </Styled.Section>
  );
};

export default Projects;
