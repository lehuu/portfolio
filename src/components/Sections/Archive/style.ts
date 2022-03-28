import styled from '@emotion/styled';
import slideTransition from '@styles/slide-transition';

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
  padding-top: ${({ theme }) => theme.space.l};

  ${slideTransition('table-transition')}
`;

export default { OpenArchiveButton, Container, ExpandableContainer };
