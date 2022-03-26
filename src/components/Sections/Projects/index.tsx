import React from 'react';
import SectionHeader from '@components/SectionHeader';
import ProjectCard from '@components/ProjectCard';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
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

interface Project {
  frontmatter: {
    startDate: string;
    endDate: string;
    name: string;
    company: string;
    techstack: string[];
    links: { type: string; link: string }[];
    picture: {
      childImageSharp: {
        fluid: FluidObject[];
      };
    };
  };
  html: string;
}

const Contact: React.FunctionComponent = () => {
  const { projects } = useStaticQuery<{ projects: { edges: { node: Project }[] } }>(PROJECT_QUERY);

  const content = projects.edges.map((edge) => ({
    ...edge.node.frontmatter,
    descriptionHTML: edge.node.html,
  }));

  return (
    <section>
      <SectionHeader title="Featured Projects" />
      <Styled.CardContainer>
        {content.map((project) => (
          <ProjectCard
            key={`${project.name}${project.startDate}`}
            title={project.name}
            image={project.picture.childImageSharp.fluid}
            imagePosition="left"
            techstack={project.techstack}
            description={project.descriptionHTML}
            links={project.links}
          />
        ))}
      </Styled.CardContainer>
    </section>
  );
};

export default Contact;
