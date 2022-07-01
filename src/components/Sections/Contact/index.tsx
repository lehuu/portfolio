import React from 'react';
import SectionHeader from '@components/SectionHeader';
import { graphql, useStaticQuery } from 'gatsby';
import SectionContainer, { SectionContainerProps } from '@components/SectionContainer';
import Styled from './style';

const CONTACT_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/contact/index.md/" }) {
      html
    }
  }
`;

const Contact: React.FunctionComponent<Pick<SectionContainerProps, 'onInView'>> = ({
  onInView,
}) => {
  const {
    markdownRemark: { html },
  } = useStaticQuery(CONTACT_QUERY);

  return (
    <SectionContainer id="contact" onInView={onInView}>
      <SectionHeader title="Contact" />
      {/* eslint-disable-next-line react/no-danger */}
      <Styled.TextContainer dangerouslySetInnerHTML={{ __html: html }} />
    </SectionContainer>
  );
};

export default Contact;
