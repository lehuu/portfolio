import React from 'react';
import { useTheme } from '@hooks';
import MoonIcon from '@icons/moon.svg';
import SunIcon from '@icons/sun.svg';
import Styled from './style';
import { Theme } from '../ThemeProvider';

const ThemeSwitchButton: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme((currentTheme) => (currentTheme + 1) % 2);
  };

  return (
    <Styled.Button type="button" onClick={handleClick}>
      {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
    </Styled.Button>
  );
};

export default ThemeSwitchButton;
