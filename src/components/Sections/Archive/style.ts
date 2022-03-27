import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OpenArchiveButton = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.m};

  &:hover {
    text-decoration: underline;
  }
`;

export default { OpenArchiveButton, Container };
