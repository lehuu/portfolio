import React, { useState } from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import SectionContainer, { SectionContainerProps } from '@components/SectionContainer';
import { Tabbar, TabContent } from './partials';
import Styled from './style';

const EXPERIENCE_QUERY = graphql`
  {
    jobs: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/experience/"}}
      sort: {frontmatter: {endDate: DESC}}
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
            consultancy
            consultancyUrl
          }
          html
        }
      }
    }
  }
`;

const Experience: React.FunctionComponent<Pick<SectionContainerProps, 'onInView'>> = ({
  onInView,
}) => {
  const { jobs } = useStaticQuery(EXPERIENCE_QUERY);
  const [selectedTab, setSelectedTab] = useState(0);

  const content = jobs.edges.map((edge) => ({
    ...edge.node.frontmatter,
    tasksHTML: edge.node.html,
  }));

  const selectedContent = content[selectedTab];

  const startDate = new Date(selectedContent.startDate);
  const endDate = !selectedContent.endDate ? undefined : new Date(selectedContent.endDate);

  return (
    <SectionContainer id="experience" onInView={onInView}>
      <SectionHeader title="Experience" />
      <Styled.TabView>
        <Tabbar
          tabs={content.map((job) => job.company)}
          selectedTab={selectedTab}
          onChange={setSelectedTab}
        />
        <TabContent {...selectedContent} startDate={startDate} endDate={endDate} />
      </Styled.TabView>
    </SectionContainer>
  );
};

export default Experience;
