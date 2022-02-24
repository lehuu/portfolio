import '@emotion/react';
import { ExactTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends ExactTheme {}
}
