import styled from '@emotion/styled';
import mixinTransition from '@styles/mixin-transition';

const LinkContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space.m};

  li {
    height: ${({ theme }) => theme.fontSizes.l};
  }
`;

const Table = styled.table`
  width: 100%;

  th {
    text-align: left;
  }

  td,
  th {
    padding: ${({ theme }) => theme.space.s};
    vertical-align: middle;

    :first-of-type {
      padding-left: ${({ theme }) => theme.space.m};
    }
    :last-of-type {
      padding-right: ${({ theme }) => theme.space.m};
    }
  }

  tbody {
    tr {
      cursor: pointer;
      border-radius: ${({ theme }) => theme.radii.regular};
      overflow: hidden;

      &:hover {
        td {
          background-color: ${({ theme }) => theme.colors.hoverBg};
        }
      }

      td {
        :first-of-type {
          border-top-left-radius: ${({ theme }) => theme.radii.large};
          border-bottom-left-radius: ${({ theme }) => theme.radii.large};
        }
        :last-of-type {
          border-top-right-radius: ${({ theme }) => theme.radii.large};
          border-bottom-right-radius: ${({ theme }) => theme.radii.large};
        }
      }
    }
  }
`;

const RegularCell = styled.td`
  width: 0;
`;

const TitleCell = styled.td`
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${mixinTransition('color')}
`;

const DateCell = styled.td`
  color: ${({ theme }) => theme.colors.accent};
  width: 8ch;
`;

export default { LinkContainer, Table, TitleCell, DateCell, RegularCell };
