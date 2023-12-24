import { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  space: {
    none: 0,
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '30px',
    xxl: '45px',
    xxxl: '60px',
    section: '100px',
  },
  borders: {
    bold: 'hsla(0, 0%, 78%, 1)',
    regular: 'hsla(0, 0%, 78%, 0.5)',
  },
  colors: {
    text: 'hsla(0, 0%, 0%, 0.75)',
    textStrong: 'hsla(0, 0%, 0%, 1)',
    background: '#FAFAFA',
    accent: '#2C91F6',
    hoverBg: 'hsla(0, 0%, 0%, 0.1)',
    overlay: 'hsla(0, 0%, 0%, 0.4)',
    themeSwitcher: {
      backgroundColor: 'hsla(0, 0%, 87%, 0.75)',
      iconColor: '#FFAA00',
      hoverBgColor: 'hsla(0, 0%, 80%, 0.75)',
    },
    modes: {
      dark: {
        text: 'hsla(0, 0%, 100%, 0.75)',
        textStrong: 'hsla(0, 0%, 100%, 1)',
        background: '#1D1D1F',
        accent: '#74caf9',
        hoverBg: 'hsla(0, 0%, 100%, 0.1)',
        overlay: 'hsla(0, 0%, 0%, 0.6)',
        themeSwitcher: {
          backgroundColor: 'hsla(0, 0%, 100%, 0.75)',
          iconColor: '#3A5D74',
          hoverBgColor: 'hsla(0, 0%, 85%, 0.75)',
        },
      },
    },
  },
  radii: {
    regular: '8px',
    large: '16px',
  },
  shadows: {
    box: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    slideIn: '-10px 0px 30px -15px rgba(2,12,27,0.7)',
  },
  fonts: {
    regular:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
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
