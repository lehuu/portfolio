import React from 'react';
import { Layout, Head as DefaultHead } from '@components';
import HashProvider from '@components/HashProvider';
import { HeadProps } from 'gatsby';
import SectionsPage from './sections';

const IndexPage = () => (
  <HashProvider>
    <Layout>
      <SectionsPage />
    </Layout>
  </HashProvider>
);

export default IndexPage;

export const Head: React.FunctionComponent<HeadProps> = ({ location }) => (
  <DefaultHead pathname={location.pathname} />
);
