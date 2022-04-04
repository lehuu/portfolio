import styled from '@emotion/styled';
import breakpoints from '@styles/breakpoints';
import mixinTransition from '@styles/mixin-transition';
import slideTransition from '@styles/slide-transition';

export const TRANSITION_NAME = 'table-detail-transition';

const RoundedContainer = styled.div`
  border-radius: ${(props) => props.theme.radii.large};
  overflow: hidden;
`;

const DetailsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  padding: ${({ theme }) => theme.space.s} ${({ theme }) => theme.space.m};

  ${slideTransition(TRANSITION_NAME, true)}
`;

const ImageContainer = styled(RoundedContainer)`
  box-shadow: ${(props) => props.theme.shadows.box};
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;

  .gatsby-image-wrapper {
    height: 100%;
  }
  @media ${breakpoints.tablet} {
    grid-area: 1 / 1 / -1 / 7;

    height: unset;
    .gatsby-image-wrapper {
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
  ${mixinTransition('background-color')}

  display: flex;
  align-items: center;

  @media ${breakpoints.tablet} {
    height: unset;
    grid-area: 1 / 6 / -1 / -1;
    text-align: right;
    padding: ${({ theme }) => `${theme.space.m} 0 ${theme.space.m} ${theme.space.l}`};
  }
`;

export default { TextContainer, ImageContainer, DetailsContainer };
