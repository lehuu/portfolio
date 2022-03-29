import React from 'react';
import Styled from './style';

interface SectionContainerProps {
  className?: string;
  id?: string;
}

const SectionContainer: React.FunctionComponent<SectionContainerProps> = ({
  children,
  id,
  className,
}) => (
  <Styled.Section className={className}>
    <Styled.ScrollAnchor aria-hidden="true" id={id} />
    {children}
  </Styled.Section>
);

export default SectionContainer;
