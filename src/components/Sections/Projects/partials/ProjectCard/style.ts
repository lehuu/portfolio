import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinTransition, breakpoints } from '@styles';

interface RoundedContainerProps {
  hasShadow?: boolean;
}

const RoundedContainer = styled.div<RoundedContainerProps>`
  border-radius: ${(props) => props.theme.radii.large};
  overflow: hidden;
  ${(props) =>
    props.hasShadow
      ? css`
          box-shadow: ${props.theme.shadows.box};
        `
      : ''};

  @media ${breakpoints.tablet} {
    width: 75%;
    max-width: 500px;
  }
`;

const ImageContainer = styled(RoundedContainer)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space.m};

  li {
    line-height: 0;
  }
`;

const TextContainer = styled.div`
  padding: ${({ theme }) => theme.space.m};
  background-color: ${({ theme }) => theme.colors.background};
  opacity: 0.93;
  ${mixinTransition(['background-color'])}
`;

const ProjectTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.textStrong};
  margin-bottom: ${({ theme }) => theme.space.m};
  ${mixinTransition(['color'])}
`;

const ProjectTitleLink = styled.a`
  &[href] {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.accent};
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
`;

interface PositionProps {
  imagePosition: 'left' | 'right';
}

const CardContainer = styled.div<PositionProps>`
  position: relative;
  display: flex;
  ${({ imagePosition }) =>
    imagePosition === 'left' &&
    css`
      justify-content: end;
    `}

  ${ImageContainer} {
    @media ${breakpoints.tablet} {
      ${({ imagePosition }) =>
        imagePosition === 'left'
          ? css`
              left: 0;
            `
          : css`
              right: 0;
            `}

      top: ${({ theme }) => theme.space.m};
      height: ${({ theme }) => `calc(100% - 2 * ${theme.space.m})`};
    }
  }

  ${TextContainer} {
    @media ${breakpoints.tablet} {
      ${({ theme, imagePosition }) =>
        imagePosition === 'left'
          ? css`
              ${TechList}, ${LinkContainer}{
                justify-content: end;
              }
              ${TechList} {
                & > * {
                  &::after{
                    content: '';
                    margin: 0;
                  }
                }
                & > *:not(:first-of-type) {
                  &::before {
                    opacity: 0.75;
                    content: '\\2022';
                    margin: 0 ${theme.space.s};
                  }
                }
              }
              text-align: right;
              padding: ${theme.space.m} 0 ${theme.space.m} ${theme.space.l}};
            `
          : css`
              padding: ${theme.space.m} ${theme.space.l} ${theme.space.m} 0};
            `}
    }
  }
`;

export default {
  RoundedContainer,
  LinkContainer,
  TextContainer,
  ProjectTitle,
  TechList,
  ImageContainer,
  ProjectTitleLink,
  CardContainer,
};
