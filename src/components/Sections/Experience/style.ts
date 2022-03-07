import styled from '@emotion/styled';
import { breakpoints } from '@styles';

const TabView = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
    gap: ${({ theme }) => theme.space.l};
  }
`;

export default { TabView };
