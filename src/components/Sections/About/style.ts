import styled from '@emotion/styled';

const TextContainer = styled.div`
  text-align: center;
  > p {
    margin-bottom: ${({ theme }) => theme.space.l};
  }
`;

export default { TextContainer };
