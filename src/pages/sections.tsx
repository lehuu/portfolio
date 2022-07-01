import React, { useContext, useRef } from 'react';
import {
  IntroSection,
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectSection,
  ArchiveSection,
} from '@components';
import { HashContext } from '@components/HashProvider';

const SectionsPage = () => {
  const { setHash } = useContext(HashContext);
  const trackedSections = useRef({});

  const handleSectionInView = (intersectionRatio: number, rect: DOMRectReadOnly, id?: string) => {
    trackedSections.current[id || ''] = {
      id: id || '',
      intersectionRatio,
      rect,
      screenPercentage: (intersectionRatio * rect.height) / window.innerHeight,
    };

    const values: {
      id: string;
      intersectionRatio: number;
      rect: DOMRectReadOnly;
      screenPercentage: number;
    }[] = Object.values(trackedSections.current);

    const maxIntersectionValue = Math.max(...values.map((value) => value.intersectionRatio));
    const maxSection = values
      .filter(
        (value) =>
          value.intersectionRatio > maxIntersectionValue - 0.05 &&
          value.intersectionRatio < maxIntersectionValue + 0.05
      )
      .reduce((prev, current) =>
        prev.screenPercentage > current.screenPercentage ? prev : current
      );

    // special handling for archive section
    const activateId = maxSection.id === 'archive' ? 'projects' : maxSection.id;
    setHash(activateId);
  };

  return (
    <>
      <IntroSection onInView={handleSectionInView} />
      <AboutSection onInView={handleSectionInView} />
      <ExperienceSection onInView={handleSectionInView} />
      <ProjectSection onInView={handleSectionInView} />
      <ArchiveSection onInView={(ratio, rect) => handleSectionInView(ratio, rect, 'archive')} />
      <ContactSection onInView={handleSectionInView} />
    </>
  );
};

export default SectionsPage;
