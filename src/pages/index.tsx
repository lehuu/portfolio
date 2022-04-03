import React from 'react';
import {
  IntroSection,
  Layout,
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectSection,
  ArchiveSection,
} from '@components';
import HashProvider from '@components/HashProvider';

const IndexPage = () => (
  <HashProvider>
    <Layout>
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ArchiveSection />
      <ContactSection />
    </Layout>
  </HashProvider>
);

export default IndexPage;
