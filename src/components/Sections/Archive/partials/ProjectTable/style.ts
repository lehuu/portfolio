import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinTransition, breakpoints } from '@styles';

const LinkContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space.m};

  li {
    line-height: 0;
  }
`;

const ProjectCardRow = styled.tr`
  td {
    padding: 0;
    padding-left: 0 !important;
    padding-right: 0 !important;
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
    tr:not(${ProjectCardRow}) {
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

interface CellWithBreakpointProps {
  visibleFrom?: keyof typeof breakpoints;
  fitContent?: boolean;
}

const CellWithBreakpoint = styled.td<CellWithBreakpointProps>`
  ${({ fitContent }) =>
    fitContent &&
    css`
      width: 0;
    `}

  ${({ visibleFrom }) =>
    visibleFrom &&
    css`
      display: none;
      @media ${breakpoints[visibleFrom]} {
        display: table-cell;
      }
    `}
`;

const TechCell = styled(CellWithBreakpoint)``;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSizes.s};

  & > *:not(:last-of-type) {
    &::after {
      opacity: 0.75;
      content: '\\2022';
      margin: 0 ${({ theme }) => theme.space.s};
    }
  }
`;

const TitleCell = styled(CellWithBreakpoint)`
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${mixinTransition(['color'])}
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateCell = styled(CellWithBreakpoint)`
  color: ${({ theme }) => theme.colors.accent};
  width: 8ch;
`;

const CompanyCell = styled(CellWithBreakpoint)`
  min-width: 18ch;
`;

export default {
  LinkContainer,
  Table,
  CompanyCell,
  TitleCell,
  DateCell,
  CellWithBreakpoint,
  TechList,
  ProjectCardRow,
  TechCell,
};
