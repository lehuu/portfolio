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

const IndexPage = () => (
  <Layout>
    <IntroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectSection />
    <ArchiveSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
