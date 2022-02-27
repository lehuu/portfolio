import styled from '@emotion/styled';

const TextContainer = styled.div`
  text-align: center;
  > p:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.xl};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default { TextContainer };
