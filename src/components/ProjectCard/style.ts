import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinTransition } from '@styles';

interface RoundedContainerProps {
  hasShadow?: boolean;
}

const CardContainer = styled.div`
  position: relative;
`;

const RoundedContainer = styled.div<RoundedContainerProps>`
  border-radius: ${(props) => props.theme.radii.large};
  overflow: hidden;
  ${(props) =>
    props.hasShadow
      ? css`
          box-shadow: ${props.theme.shadows.box};
        `
      : ''};
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
`;

const TextContainer = styled.div`
  padding: ${({ theme }) => theme.space.m};
  background-color: ${({ theme }) => theme.colors.background};
  opacity: 0.9;
  ${mixinTransition('background-color')}
`;

const ProjectTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.textStrong};
  margin-bottom: ${({ theme }) => theme.space.m};
  ${mixinTransition('color')}
`;

const TechList = styled.ul`
  margin: ${({ theme }) => theme.space.m} 0;
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-of-type) {
    &::after {
      opacity: 0.75;
      content: '\\2022';
      margin: 0 ${({ theme }) => theme.space.m};
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
  CardContainer,
};
