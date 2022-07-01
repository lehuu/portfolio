import styled from '@emotion/styled';
import SectionContainer from '@components/SectionContainer';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

const Section = styled(SectionContainer)`
  margin-bottom: ${({ theme }) => theme.space.xxxl};
`;

export default { CardContainer, Section };
