import React from 'react';
import { useColorMode } from 'theme-ui';
import Styled from './style';

const ThemeSwitchButton: React.FunctionComponent = () => {
  // const { isDarkMode, toggle } = useTheme();
  const [colorMode, setColorMode] = useColorMode();

  const isDarkMode = colorMode === 'dark';

  const handleButtonClick = () => {
    setColorMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Styled.Button type="button" onClick={handleButtonClick} aria-label="switch theme">
      <Styled.SunIcon $isVisible={!isDarkMode} />
      <Styled.MoonIcon $isVisible={isDarkMode} />
    </Styled.Button>
  );
};

export default ThemeSwitchButton;
