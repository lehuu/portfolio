import styled from '@emotion/styled';
import { contentWidth } from '@styles';

const Main = styled.main`
  flex: 1 0 auto;
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.l}`};
  max-width: ${contentWidth.main};
  width: 100%;
  box-sizing: border-box;
  display: grid;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
`;

export default { FlexContainer, Main };
