import { css } from '@emotion/react';
import mixinTransition from './mixin-transition';

const slideTransition = (name: string, postAmpersand?: boolean) => css`
  ${!postAmpersand && '&'}.${name}-enter ${postAmpersand && '&'} {
    opacity: 0;
    max-height: 0;
  }

  ${!postAmpersand && '&'}.${name}-enter-active ${postAmpersand && '&'} {
    opacity: 1;
    max-height: 1000px;
    ${mixinTransition(['opacity', 'max-height'])}
  }

  ${!postAmpersand && '&'}.${name}-exit ${postAmpersand && '&'} {
    opacity: 1;
    max-height: 1000px;
  }

  ${!postAmpersand && '&'}.${name}-exit-active ${postAmpersand && '&'} {
    opacity: 0;
    max-height: 0;
    ${mixinTransition(['opacity', 'max-height'])}
  }
`;

export default slideTransition;
