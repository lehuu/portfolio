import styled from '@emotion/styled';

const Section = styled.section`
  position: relative;
  margin: ${({ theme }) => `${theme.space.section} 0`};
`;

const ScrollAnchor = styled.div`
  position: absolute;
  top: -100px;
`;

export default { Section, ScrollAnchor };
