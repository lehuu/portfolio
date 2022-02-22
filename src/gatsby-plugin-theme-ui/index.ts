import { Theme } from 'theme-ui';

const theme: Theme = {
  space: [0, 8, 16, 24, 30, 45, 60],
  colors: {
    text: 'hsla(0, 0%, 0%, 0.65)',
    background: '#FAFAFA',

    modes: {
      dark: {
        text: 'hsla(0, 0%, 100%, 0.75)',
        background: '#1D1D1F',
      },
    },
  },
  fonts: {
    regular: 'Inter, sans-serif',
    bold: 'inherit',
  },
  fontWeights: {
    regular: 400,
    bold: 600,
  },
  fontSizes: [14, 16, 20, 24, 32],
  styles: {
    root: {
      fontFamily: 'regular',
      fontWeight: 'regular',
      fontSize: 2,
    },
  },
};

export default theme;
