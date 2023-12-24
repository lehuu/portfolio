import React from 'react';
import { Layout, Head as DefaultHead } from '@components';
import styled from '@emotion/styled';
import { contentWidth, mixinTransition } from '@styles';
import { graphql, useStaticQuery, HeadProps } from 'gatsby';

const Container = styled.section`
  max-width: ${({ theme }) => `calc(${contentWidth.navigationBar} - ${theme.space.l} * 2)`};
  width: 100%;
  justify-self: center;
  align-self: start;

  p {
    white-space: pre-wrap;
    margin-bottom: ${({ theme }) => theme.space.m};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.textStrong};
    ${mixinTransition(['color'])}
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space.m};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin-bottom: ${({ theme }) => theme.space.xs};
  }
`;

const IMPRINT_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/imprint/index.md/" }) {
      html
    }
  }
`;

const ImprintPage = () => {
  const {
    markdownRemark: { html },
  } = useStaticQuery(IMPRINT_QUERY);

  return (
    <Layout>
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ImprintPage;

export const Head: React.FunctionComponent<HeadProps> = ({ location }) => (
  <DefaultHead pathname={location.pathname} additionalTitle="Imprint" />
);
