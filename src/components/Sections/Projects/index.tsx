import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Project } from 'types';
import { ProjectCard } from './partials';
import Styled from './style';

const PROJECT_QUERY = graphql`
  {
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/projects/" }
        frontmatter: { featured: { ne: null } }
      }
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

const Contact: React.FunctionComponent = () => {
  const { projects } = useStaticQuery<{ projects: { edges: { node: Project }[] } }>(PROJECT_QUERY);

  const content = projects.edges.map((edge) => ({
    ...edge.node.frontmatter,
    descriptionHTML: edge.node.html,
  }));

  return (
    <Styled.Section>
      <SectionHeader title="Featured Projects" id="projects" />
      <Styled.CardContainer>
        {content.map((project, index) => (
          <ProjectCard
            key={`${project.name}${project.startDate}`}
            title={project.name}
            image={project.picture.childImageSharp.fluid}
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

export default Contact;
