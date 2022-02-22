import * as React from 'react';
import { Layout } from '@components';
import styled from 'styled-components';
import { contentWidth, mixinTransitionOld } from '@styles';
import { graphql, useStaticQuery } from 'gatsby';

const Container = styled.section`
  max-width: ${({ theme }) => `calc(${contentWidth.navigationBar} - ${theme.gaps.l} * 2)`};
  width: 100%;
  justify-self: center;
  padding: ${({ theme }) => `0 ${theme.gaps.l}`};
  align-self: start;

  p {
    white-space: pre-wrap;
    margin-bottom: ${({ theme }) => theme.gaps.m};
  }

  a {
    color: ${({ theme }) => theme.font.color.highlight};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2 {
    color: ${({ theme }) => theme.font.color.strong};
    ${mixinTransitionOld('color')}
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.xl};
    margin-bottom: ${({ theme }) => theme.gaps.m};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.l};
    margin-bottom: ${({ theme }) => theme.gaps.s};
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
    <Layout additionalTitle="Imprint">
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ImprintPage;
