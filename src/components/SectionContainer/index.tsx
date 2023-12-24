import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Styled from './style';

// Arbitrary number after testing
const THRESHOLD_DISTANCE = 0.12;

function createThresholdArray() {
  const numberOfSteps = Math.floor(1 / THRESHOLD_DISTANCE + 1);

  const result = [...Array(numberOfSteps)].map((_, index) =>
    Number((index * THRESHOLD_DISTANCE).toFixed(2))
  );
  if (result[result.length - 1] < 1) {
    result.push(1);
  }

  return result;
}

export interface SectionContainerProps {
  className?: string;
  id?: string;
  onInView?: (intersectionRatio: number, boundingRect: DOMRectReadOnly, id?: string) => void;
  children: React.ReactNode;
}

const SectionContainer: React.FunctionComponent<SectionContainerProps> = ({
  children,
  id,
  className,
  onInView,
}) => {
  const { ref, entry } = useInView({ threshold: createThresholdArray() });

  useEffect(() => {
    if (!entry || !onInView) {
      return;
    }

    const { intersectionRatio, boundingClientRect } = entry;
    onInView(intersectionRatio, boundingClientRect, id);
  }, [entry?.intersectionRatio]);

  return (
    <Styled.Section className={className} ref={ref}>
      <Styled.ScrollAnchor aria-hidden="true" id={id} />
      {children}
    </Styled.Section>
  );
};

export default SectionContainer;
