import React from 'react';
import Styled from './style';

interface SlideInProps {
  isOpen: boolean;
}

const SlideIn: React.FunctionComponent<SlideInProps> = ({ isOpen }) => (
  <Styled.SlideInContainer isOpen={isOpen}>SlideInContent</Styled.SlideInContainer>
);

export default SlideIn;
