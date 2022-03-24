import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PROJECT_QUERY = graphql`
{
  projects: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content/projects/"}, frontmatter: {featured: {ne: null}}}
    sort: {fields: [frontmatter___featured], order: ASC}
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
              gatsbyImageData(width: 700, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
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
  const { projects } = useStaticQuery(PROJECT_QUERY);

  const content = projects.edges.map((edge) => ({
    ...edge.node.frontmatter,
    descriptionHTML: edge.node.html,
  }));

  console.log(content);

  const imageData = getImage(content[0].picture)

  return (
    <section>
      <SectionHeader title="Featured Projects" />
      <GatsbyImage image={imageData} alt="porrait" />
    </section>
  );
};

export default Contact;
