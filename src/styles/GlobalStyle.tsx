import React from 'react';
import { Global, css } from '@emotion/react';
import mixinTransition, { THEME_TRANSITION_VAR } from './mixin-transition';

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.25;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background: none;
    box-shadow: none;
    border: none;
  }
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}
      html {
        height: 100%;
        scroll-behavior: smooth;
        ${mixinTransition(['color', 'background-color'])};
      }

      :root {
        // initially set to zero so to first render does not flash from white to black for dark mode
        ${THEME_TRANSITION_VAR}: 0s;
      }

      body {
        width: 100%;
        overflow-x: hidden;

        &.no-scroll {
          overflow-y: scroll;
          position: fixed;
        }
      }

      body,
      #gatsby-focus-wrapper,
      #___gatsby {
        height: 100%;
      }
    `}
  />
);

export default GlobalStyle;
