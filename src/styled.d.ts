import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    font: {
      color: {
        strong: string;
        regular: string;
        highlight: string;
      };
      size: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
      };
    };
    border: {
      color: {
        strong: string;
        regular: string;
      };
      radius: string;
      hoverfill: string;
    };
    gaps: {
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
