import React from 'react';
import CloseIcon from '@icons/close.svg';
import HamburgerIcon from '@icons/hamburger.svg';
import Styled from './style';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: (isOpen: boolean) => void;
}

const HamburgerButton: React.FunctionComponent<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  const handleButtonClick = () => {
    onClick(isOpen);
  };

  return (
    <Styled.Button
      type="button"
      onClick={handleButtonClick}
      aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
    >
      <Styled.IconContainer isVisible={!isOpen}>
        <HamburgerIcon />
      </Styled.IconContainer>
      <Styled.IconContainer isVisible={isOpen}>
        <CloseIcon />
      </Styled.IconContainer>
    </Styled.Button>
  );
};

export default HamburgerButton;
