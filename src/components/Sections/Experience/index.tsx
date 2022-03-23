import React, { useState } from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import { Tabbar, TabContent } from './partials';
import Styled from './style';

const CONTACT_QUERY = graphql`
  {
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/experience/" } }
      sort: { fields: [frontmatter___endDate], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            url
            startDate
            endDate
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

  const content = jobs.edges.map((edge) => ({
    ...edge.node.frontmatter,
    tasksHTML: edge.node.html,
  }));

  const selectedContent = content[selectedTab];

  const startDate = new Date(selectedContent.startDate);
  const endDate = selectedContent.endDate === 'now' ? 'now' : new Date(selectedContent.endDate);

  return (
    <section>
      <SectionHeader title="Experience" />
      <Styled.TabView>
        <Tabbar
          tabs={content.map((job) => job.company)}
          selectedTab={selectedTab}
          onChange={setSelectedTab}
        />
        <TabContent {...selectedContent} startDate={startDate} endDate={endDate} />
      </Styled.TabView>
    </section>
  );
};

export default Contact;
