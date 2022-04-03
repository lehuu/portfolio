import React from 'react';
import CloseIcon from '@icons/close.svg';
import HamburgerIcon from '@icons/hamburger.svg';
import { CSSTransition } from 'react-transition-group';
import { THEME_TRANSITION_TIME_MS } from '@styles/mixin-transition';
import Styled, { TRANSITION_NAME } from './style';

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
      <CSSTransition
        in={!isOpen}
        unmountOnExit
        timeout={THEME_TRANSITION_TIME_MS}
        classNames={TRANSITION_NAME}
      >
        <Styled.IconContainer rotationDirection="ccw">
          <HamburgerIcon />
        </Styled.IconContainer>
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={THEME_TRANSITION_TIME_MS}
        classNames={TRANSITION_NAME}
      >
        <Styled.IconContainer rotationDirection="cw">
          <CloseIcon />
        </Styled.IconContainer>
      </CSSTransition>
    </Styled.Button>
  );
};

export default HamburgerButton;
