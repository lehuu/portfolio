import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.xxxl} !important;
`;

const OpenArchiveButton = styled.button`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.m};

  &:hover {
    text-decoration: underline;
  }
`;

const ExpandableContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.space.l};
`;

export default { OpenArchiveButton, Container, ExpandableContainer };
