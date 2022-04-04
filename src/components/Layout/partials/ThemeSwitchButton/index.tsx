import React from 'react';
import { useColorMode } from 'theme-ui';
import MoonIcon from '@icons/moon.svg';
import SunIcon from '@icons/sun.svg';
import { CSSTransition } from 'react-transition-group';
import { THEME_TRANSITION_TIME_MS } from '@styles/mixin-transition';
import Styled, { TRANSITION_NAME } from './style';

const ThemeSwitchButton: React.FunctionComponent = () => {
  const [colorMode, setColorMode] = useColorMode();

  const isDarkMode = colorMode === 'dark';

  const handleButtonClick = () => {
    setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Styled.Button type="button" onClick={handleButtonClick} aria-label="switch theme">
      {colorMode ? (
        <>
          <CSSTransition
            in={!isDarkMode}
            unmountOnExit
            timeout={THEME_TRANSITION_TIME_MS}
            classNames={TRANSITION_NAME}
          >
            <Styled.IconContainer rotationDirection="ccw">
              <SunIcon />
            </Styled.IconContainer>
          </CSSTransition>
          <CSSTransition
            in={isDarkMode}
            unmountOnExit
            timeout={THEME_TRANSITION_TIME_MS}
            classNames={TRANSITION_NAME}
          >
            <Styled.IconContainer rotationDirection="cw">
              <MoonIcon />
            </Styled.IconContainer>
          </CSSTransition>
        </>
      ) : null}
    </Styled.Button>
  );
};

export default ThemeSwitchButton;
