import React from 'react';
import Styled from './style';

interface SlideInProps {
  isOpen: boolean;
  onClickOverlay: () => void;
}

const SlideIn: React.FunctionComponent<SlideInProps> = ({ isOpen, onClickOverlay }) => (
  <>
    <Styled.Overlay isOpen={isOpen} onClick={onClickOverlay} />
    <Styled.SlideInContainer isOpen={isOpen}>SlideInContent</Styled.SlideInContainer>
  </>
);

export default SlideIn;
