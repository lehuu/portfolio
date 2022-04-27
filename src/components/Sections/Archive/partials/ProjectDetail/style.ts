import { css } from '@emotion/react';
import styled from '@emotion/styled';
import breakpoints from '@styles/breakpoints';
import mixinTransition from '@styles/mixin-transition';
import slideTransition from '@styles/slide-transition';

export const TRANSITION_NAME = 'table-detail-transition';

const ProjectCardRow = styled.tr`
  td {
    padding: 0 !important;
  }
`;

const CompanyContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.s};

  @media ${breakpoints.mobileXL} {
    display: none;
  }
`;

const NoDetailsContainer = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const RoundedContainer = styled.div`
  border-radius: ${(props) => props.theme.radii.large};
  overflow: hidden;
`;

interface TransitionContainerProps {
  visible?: boolean;
}

const TransitionContainer = styled.div<TransitionContainerProps>`
  ${slideTransition(TRANSITION_NAME)}

  ${(props) =>
    !props.visible &&
    css`
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    `}
`;

const DetailsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  padding: ${({ theme }) => theme.space.s} ${({ theme }) => theme.space.m};
`;

const ImageContainer = styled(RoundedContainer)`
  box-shadow: ${(props) => props.theme.shadows.box};
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  overflow: unset;

  a {
    overflow: hidden;
    border-radius: inherit;
    display: block;
    height: 100%;

    &:hover,
    &:focus-visible {
      .gatsby-image-wrapper {
        filter: none;
      }
    }

    &:focus-visible {
      outline: ${({ theme }) => theme.colors.accent} 2px solid;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media ${breakpoints.tablet} {
    grid-area: 1 / 1 / -1 / 7;

    height: unset;
    .gatsby-image-wrapper {
      ${mixinTransition(['filter'])};
      filter: grayscale(70%) contrast(1) brightness(90%);
      height: unset;
    }
  }
`;

const TextContainer = styled(RoundedContainer)`
  grid-area: 1 / 1 / -1 / -1;
  padding: ${({ theme }) => theme.space.m};
  background-color: ${({ theme }) => theme.colors.background};
  opacity: 0.93;
  height: 100%;
  max-width: 700px;
  justify-content: center;
  ${mixinTransition(['background-color'])}

  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:only-child {
    padding: ${({ theme }) => `0 ${theme.space.m}`};
  }

  @media ${breakpoints.tablet} {
    height: unset;
    grid-area: 1 / 6 / -1 / -1;
    text-align: right;
    padding: ${({ theme }) => `${theme.space.m} 0 ${theme.space.m} ${theme.space.l}`};

    &:only-child {
      grid-area: 1 / 1 / -1 / -1;
      text-align: left;
      padding: ${({ theme }) => `0 ${theme.space.m}`};
      width: 100%;
      max-width: unset;
    }
  }
`;

const TechList = styled.ul`
  margin: ${({ theme }) => theme.space.m} 0 ${({ theme }) => theme.space.l};
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

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export default {
  TextContainer,
  ImageContainer,
  DetailsContainer,
  NoDetailsContainer,
  CompanyContainer,
  TechList,
  TransitionContainer,
  ProjectCardRow,
};
