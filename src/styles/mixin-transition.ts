import { css } from '@emotion/react';

export const THEME_TRANSITION_VAR = '--theme-transition-time';
export const THEME_TRANSITION_TIME_MS = 250;
export const THEME_TRANSITION_TIME = `${THEME_TRANSITION_TIME_MS / 1000}s`;

const mixinTransition = (properties: string[], timing: 'ease' | 'linear' = 'linear') => css`
  transition: ${properties
    .map((prop) => `${prop} var(${THEME_TRANSITION_VAR}) ${timing}`)
    .join(', ')};
`;

export default mixinTransition;
