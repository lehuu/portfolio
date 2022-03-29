import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import SectionContainer from '@components/SectionContainer';
import Styled from './style';

const ABOUT_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/about/index.md/" }) {
      html
    }
  }
`;

const About: React.FunctionComponent = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery(ABOUT_QUERY);

  return (
    <SectionContainer id="about">
      <SectionHeader title="About Me" />
      {/* eslint-disable-next-line react/no-danger */}
      <Styled.TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    </SectionContainer>
  );
};

export default About;
