import { css } from 'styled-components';

const mixinTransition = (...properties: string[]) => css`
  transition: ${properties.map((prop) => `${prop} 0.25s linear`).join(', ')};
`;

export default mixinTransition;
