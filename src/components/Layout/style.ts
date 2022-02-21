import styled from 'styled-components';
import { contentWidth } from '@styles';

const Main = styled.main`
  flex: 1 0 auto;
  padding: ${({ theme }) => `${theme.gaps.xl} ${theme.gaps.l}`};
  max-width: ${contentWidth.main};
  width: 100%;
  box-sizing: border-box;
  display: grid;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
`;

export default { FlexContainer, Main };
