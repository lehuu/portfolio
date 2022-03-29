import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
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
    <section>
      <SectionHeader title="About Me" id="about" />
      {/* eslint-disable-next-line react/no-danger */}
      <Styled.TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
};

export default About;
