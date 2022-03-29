import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import Styled from './style';

const CONTACT_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/contact/index.md/" }) {
      html
    }
  }
`;

const Contact: React.FunctionComponent = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery(CONTACT_QUERY);

  return (
    <section>
      <SectionHeader title="Contact" id="contact" />
      {/* eslint-disable-next-line react/no-danger */}
      <Styled.TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
};

export default Contact;
