import React from 'react';
import { useTheme } from '@hooks';
import Styled from './style';
import { Theme } from '../ThemeProvider';

const ThemeSwitchButton: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme((currentTheme) => (currentTheme + 1) % 2);
  };

  return (
    <Styled.Button type="button" onClick={handleClick}>
      <Styled.SunIcon $isVisible={theme === Theme.LIGHT} />
      <Styled.MoonIcon $isVisible={theme !== Theme.LIGHT} />
    </Styled.Button>
  );
};

export default ThemeSwitchButton;
