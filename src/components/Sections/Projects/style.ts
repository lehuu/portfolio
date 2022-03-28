import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.space.xxxl} !important;
`;

export default { CardContainer, Section };
