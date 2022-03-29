import styled from '@emotion/styled';
import { contentWidth } from '@styles';

const Main = styled.main`
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.l}`};
  max-width: ${contentWidth.main};
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
`;

export default { FlexContainer, Main };
