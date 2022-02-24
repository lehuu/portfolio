import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { mixinTransition, breakpoints } from '@styles';

const Container = styled.section`
  margin-top: ${({ theme }) => theme.space.l};
  display: flex;
  gap: ${({ theme }) => theme.space.m};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: calc(100vh - ${({ theme }) => theme.space.m} * 10); */
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: -10;
  margin-bottom: ${({ theme }) => theme.space.xl};
  user-select: none;
`;

const colorWrapperSizeDefaeult = 6;
const colorWrapperSizeMobileS = 12;
const colorWrapperSizeMobileL = 15;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const colorWrapperAttributes = css`
  box-sizing: border-box;
  position: absolute;
  height: calc(100% + ${colorWrapperSizeDefaeult * 2}px);
  width: calc(100% + ${colorWrapperSizeDefaeult * 2}px);
  top: -${colorWrapperSizeDefaeult}px;
  left: -${colorWrapperSizeDefaeult}px;
  border-radius: 50%;
  rotate: -45deg;
  animation: ${rotate} 12s linear infinite;
  background-image: radial-gradient(
      circle farthest-side at 100% 100%,
      #f24c52,
      rgba(242, 76, 82, 0)
    ),
    radial-gradient(circle farthest-side at 0 100%, #14a9f0, rgba(20, 169, 240, 0)),
    radial-gradient(circle farthest-side at 0 0, #873bf5, rgba(135, 59, 245, 0)),
    radial-gradient(circle farthest-side at 100% 0, #cb3688, rgba(203, 54, 136, 0));

  @media ${breakpoints.mobileS} {
    height: calc(100% + ${colorWrapperSizeMobileS * 2}px);
    width: calc(100% + ${colorWrapperSizeMobileS * 2}px);
    top: -${colorWrapperSizeMobileS}px;
    left: -${colorWrapperSizeMobileS}px;
  }

  @media ${breakpoints.mobileL} {
    height: calc(100% + ${colorWrapperSizeMobileL * 2}px);
    width: calc(100% + ${colorWrapperSizeMobileL * 2}px);
    top: -${colorWrapperSizeMobileL}px;
    left: -${colorWrapperSizeMobileL}px;
  }
`;

const ImageColorWrapper = styled.div`
  ${colorWrapperAttributes}
  border: 1px solid #FFFFFF;
  opacity: 0.25;
`;

const ImageColorBlur = styled.div`
  ${colorWrapperAttributes}
  filter: blur(25px);
`;

interface ProfilePictureProps {
  isAbsolute?: boolean;
  isVisible?: boolean;
}

const ProfilePicture = styled.div<ProfilePictureProps>`
  border-radius: 50%;
  overflow: hidden;
  width: clamp(100px, 60vw, 400px);
  height: clamp(100px, 60vw, 400px);
  max-height: 40vh;
  max-width: 40vh;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  // Workaround for Safari overflow
  mask-image: radial-gradient(white, black);

  ${mixinTransition('visibility', 'opacity')}

  ${(props) =>
    props.isAbsolute
      ? css`
          position: absolute;
          left: 0;
          top: 0;
        `
      : css`
          position: relative;
        `}
`;

const TextContainer = styled.div`
  h1 {
    font-size: clamp(40px, 8vw, 60px);
    text-align: center;
    color: ${({ theme }) => theme.colors.textStrong};
    ${mixinTransition('color')}
  }

  h2 {
    font-size: clamp(40px, 8vw, 60px);
    text-align: center;
  }

  p {
    text-align: center;
    margin: ${({ theme }) => theme.space.m} 0;
    white-space: pre-wrap;

    a {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  flex-wrap: wrap;
  justify-content: center;
`;

export default {
  Container,
  TextContainer,
  LinkContainer,
  ImageContainer,
  ProfilePicture,
  ImageColorWrapper,
  ImageColorBlur,
};
