import styled from 'styled-components';

const Main = styled.main`
  flex: 1 0 auto;
  padding: ${({ theme }) => `${theme.gaps.xl} ${theme.gaps.l}`};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export default { FlexContainer, Main };
