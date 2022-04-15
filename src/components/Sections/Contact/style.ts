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

    &:focus-visible {
      text-decoration: underline;
      outline: 2px solid ${({ theme }) => theme.colors.accent};
      outline-offset: ${({ theme }) => theme.space.xs};
      border-radius: ${({ theme }) => theme.radii.regular};
    }
  }
`;

export default { TextContainer };
