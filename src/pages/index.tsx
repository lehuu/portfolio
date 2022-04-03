import React from 'react';
import { Layout } from '@components';
import HashProvider from '@components/HashProvider';
import SectionsPage from './sections';

const IndexPage = () => (
  <HashProvider>
    <Layout>
      <SectionsPage />
    </Layout>
  </HashProvider>
);

export default IndexPage;
