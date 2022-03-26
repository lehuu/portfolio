import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface RoundedContainerProps {
  hasShadow?: boolean;
}

const RoundedContainer = styled.div<RoundedContainerProps>`
  border-radius: ${(props) => props.theme.radii.large};
  overflow: hidden;
  ${(props) =>
    props.hasShadow
      ? css`
          box-shadow: ${props.theme.shadows.box};
        `
      : ''};
`;

export default { RoundedContainer };
