import styled, { css } from 'styled-components';
import { mixinTransition, breakpoints } from '@styles';

const Container = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.gaps.m};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${({ theme }) => theme.gaps.m} * 10);
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: -10;
  margin-bottom: ${({ theme }) => theme.gaps.xxl};
`;

const colorWrapperSizeMobile = 12;
const colorWrapperSize = 15;

const colorWrapperAttributes = css`
  position: absolute;
  height: calc(100% + ${colorWrapperSizeMobile * 2}px);
  width: calc(100% + ${colorWrapperSizeMobile * 2}px);
  top: -${colorWrapperSizeMobile}px;
  left: -${colorWrapperSizeMobile}px;
  border-radius: 50%;
  rotate: -45deg;
  background-image: radial-gradient(
      circle farthest-side at 100% 100%,
      #f24c52,
      rgba(242, 76, 82, 0)
    ),
    radial-gradient(circle farthest-side at 0 100%, #14a9f0, rgba(20, 169, 240, 0)),
    radial-gradient(circle farthest-side at 0 0, #873bf5, rgba(135, 59, 245, 0)),
    radial-gradient(circle farthest-side at 100% 0, #cb3688, rgba(203, 54, 136, 0));

  @media ${breakpoints.mobileL} {
    height: calc(100% + ${colorWrapperSize * 2}px);
    width: calc(100% + ${colorWrapperSize * 2}px);
    top: -${colorWrapperSize}px;
    left: -${colorWrapperSize}px;
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
  $isAbsolute?: boolean;
  $isVisible?: boolean;
}

const ProfilePicture = styled.div<ProfilePictureProps>`
  border-radius: 50%;
  overflow: hidden;
  width: clamp(100px, 80vw, 400px);
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  ${mixinTransition('visibility', 'opacity')}

  ${(props) =>
    props.$isAbsolute
      ? css`
          position: absolute;
          left: 0;
          top: 0;
        `
      : ''}
`;

const Header = styled.h1`
  font-size: clamp(40px, 8vw, 70px);
  text-align: center;
  color: ${({ theme }) => theme.font.color.strong};
  ${mixinTransition('color')}
`;

const SubHeader = styled.h2`
  font-size: clamp(40px, 8vw, 70px);
  text-align: center;
`;

const DescriptionContainer = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.gaps.m} 0;
  white-space: pre-wrap;

  a {
    color: ${({ theme }) => theme.font.color.highlight};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.xl};
`;

export default {
  Container,
  DescriptionContainer,
  Header,
  SubHeader,
  LinkContainer,
  ImageContainer,
  ProfilePicture,
  ImageColorWrapper,
  ImageColorBlur,
};
