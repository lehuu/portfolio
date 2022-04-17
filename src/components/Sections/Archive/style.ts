import SectionContainer from '@components/SectionContainer';
import styled from '@emotion/styled';
import slideTransition from '@styles/slide-transition';

export const TABLE_TRANSITION = 'table-transition';

const Container = styled(SectionContainer)`
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

  &:focus-visible {
    text-decoration: underline;
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: ${({ theme }) => theme.space.xs};
    border-radius: ${({ theme }) => theme.radii.regular};
  }
`;

const ExpandableContainer = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.space.l};

  ${slideTransition(TABLE_TRANSITION)}
`;

export default { OpenArchiveButton, Container, ExpandableContainer };
