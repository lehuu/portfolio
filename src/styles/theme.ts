import { DefaultTheme } from 'styled-components';

const fontSizes = {
  size: {
    xs: '0.7rem',
    s: '0.8rem',
    m: '20px',
    l: '1.2rem',
    xl: '1.6rem',
  },
};

const gapSizes = {
  gaps: {
    s: '8px',
    m: '16px',
    l: '24px',
    xl: '30px',
    xxl: '45px',
    xxxl: '60px',
  },
};

export const lightTheme: DefaultTheme = {
  backgroundColor: '#FAFAFA',
  font: {
    color: {
      strong: 'hsla(0, 0%, 0%, 1)',
      regular: 'hsla(0, 0%, 0%, 0.65)',
      highlight: '#3997F7',
    },
    ...fontSizes,
  },
  border: {
    color: {
      strong: 'hsla(0, 0%, 78%, 1)',
      regular: 'hsla(0, 0%, 78%, 0.5)',
    },
    radius: '8px',
    hoverfill: 'hsla(0, 0%, 0%, 0.1)',
  },
  themeSwitcher: {
    backgroundColor: 'hsla(0, 0%, 82%, 0.75)',
    iconColor: '#FFAA00',
  },
  ...gapSizes,
};

export const darkTheme: DefaultTheme = {
  backgroundColor: '#1D1D1F',
  font: {
    color: {
      strong: 'hsla(0, 0%, 100%, 1)',
      regular: 'hsla(0, 0%, 100%, 0.75)',
      highlight: '#3997F7',
    },
    ...fontSizes,
  },
  border: {
    color: {
      strong: 'hsla(0, 0%, 78%, 1)',
      regular: 'hsla(0, 0%, 78%, 0.5)',
    },
    radius: '8px',
    hoverfill: 'hsla(0, 0%, 100%, 0.1)',
  },
  themeSwitcher: {
    backgroundColor: 'hsla(0, 100%, 100%, 0.75)',
    iconColor: '#3A5D74',
  },
  ...gapSizes,
};
