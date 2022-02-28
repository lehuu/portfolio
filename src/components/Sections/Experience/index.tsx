import React, { useState } from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Tabbar } from './partials';
import Styled from './style';

const CONTACT_QUERY = graphql`
  {
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/experience/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
  }
`;

const Contact: React.FunctionComponent = () => {
  const { jobs } = useStaticQuery(CONTACT_QUERY);
  const [selectedTab, setSelectedTab] = useState(0);

  const content = jobs.edges.map((edge) => ({ ...edge.node.frontmatter, tasks: edge.node.html }));

  return (
    <section>
      <SectionHeader title="Experience" />
      <Tabbar
        tabs={content.map((job) => job.company)}
        selectedTab={selectedTab}
        onChange={setSelectedTab}
      />
    </section>
  );
};

export default Contact;
