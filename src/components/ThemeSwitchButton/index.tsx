import React from 'react';
import { useColorMode } from 'theme-ui';
import MoonIcon from '@icons/moon.svg';
import SunIcon from '@icons/sun.svg';
import Styled from './style';

const ThemeSwitchButton: React.FunctionComponent = () => {
  const [colorMode, setColorMode] = useColorMode();

  const isDarkMode = colorMode === 'dark';

  const handleButtonClick = () => {
    setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Styled.Button type="button" onClick={handleButtonClick} aria-label="switch theme">
      <Styled.IconContainer isVisible={!isDarkMode}>
        <SunIcon />
      </Styled.IconContainer>
      <Styled.IconContainer isVisible={isDarkMode} isAbsolute>
        <MoonIcon />
      </Styled.IconContainer>
    </Styled.Button>
  );
};

export default ThemeSwitchButton;
