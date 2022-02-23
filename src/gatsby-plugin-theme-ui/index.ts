import { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  space: { none: 0, s: '8px', m: '16px', l: '24px', xl: '30px', xxl: '45px', xxxl: '60px' },
  borders: {
    bold: 'hsla(0, 0%, 78%, 1)',
    regular: 'hsla(0, 0%, 78%, 0.5)',
  },
  colors: {
    text: 'hsla(0, 0%, 0%, 0.65)',
    textStrong: 'hsla(0, 0%, 0%, 1)',
    background: '#FAFAFA',
    accent: '#3997F7',

    modes: {
      dark: {
        text: 'hsla(0, 0%, 100%, 0.75)',
        textStrong: 'hsla(0, 0%, 100%, 1)',
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
    bold: 700,
  },
  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '32px',
  },
  styles: {
    root: {
      fontFamily: 'regular',
      fontWeight: 'regular',
      fontSize: 'm',
    },
  },
});

export type ExactTheme = typeof theme;

export default theme;