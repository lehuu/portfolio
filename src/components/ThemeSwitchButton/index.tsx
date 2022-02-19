import React from 'react';
import { useTheme } from '@hooks';
import Styled from './style';

const ThemeSwitchButton: React.FunctionComponent = () => {
  const { isDarkMode, toggle } = useTheme();

  return (
    <Styled.Button type="button" onClick={toggle}>
      <Styled.SunIcon $isVisible={!isDarkMode} />
      <Styled.MoonIcon $isVisible={isDarkMode} />
    </Styled.Button>
  );
};

export default ThemeSwitchButton;
