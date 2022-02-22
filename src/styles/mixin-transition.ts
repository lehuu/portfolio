import { css } from '@emotion/react';

const mixinTransition = (...properties: string[]) => css`
  transition: ${properties.map((prop) => `${prop} 0.25s linear`).join(', ')};
`;

export default mixinTransition;
