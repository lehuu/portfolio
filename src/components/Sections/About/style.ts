import styled from '@emotion/styled';

const TextContainer = styled.div`
  text-align: center;
  > p:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.l};
  }
`;

export default { TextContainer };
