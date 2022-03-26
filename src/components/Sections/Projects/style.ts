import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

export default { CardContainer };
