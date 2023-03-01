import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { contentWidth } from '@styles';

const generateStars = (amount: number) => {
  const result: string[] = [];

  for (let i = 0; i < amount; i += 1) {
    const x = (Math.random() * 3500).toFixed(0);
    const y = (Math.random() * 3500).toFixed(0);

    result.push(`${x}px ${y}px var(--theme-ui-colors-accent)`);
  }
  return result.join(', ');
};

const smallStars = generateStars(700);
const mediumStars = generateStars(200);
const bigStars = generateStars(100);

const moveUp = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const SmallStars = styled.div`
  width: 2px;
  height: 2px;
  opacity: 0.5;
  position: absolute;
  z-index: -11;
  background: transparent;
  box-shadow: ${smallStars};
  animation: ${moveUp} 50s linear infinite;
  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    opacity: 0.5;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${smallStars};
  }
`;

const MediumStars = styled.div`
  width: 3px;
  height: 3px;
  position: absolute;
  opacity: 0.65;
  z-index: -11;
  background: transparent;
  box-shadow: ${mediumStars};
  animation: ${moveUp} 100s linear infinite;
  &:after {
    content: ' ';
    opacity: 0.65;
    position: absolute;
    top: 3000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${mediumStars};
  }
`;

const BigStars = styled.div`
  width: 3px;
  height: 3px;
  position: absolute;
  opacity: 0.7;
  z-index: -11;
  background: transparent;
  box-shadow: ${bigStars};
  animation: ${moveUp} 150s linear infinite;
  &:after {
    content: ' ';
    opacity: 0.7;
    position: absolute;
    top: 3000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${bigStars};
  }
`;

const Main = styled.main`
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.l}`};
  max-width: ${contentWidth.main};
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.xxxl};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
`;

export default { FlexContainer, Main, SmallStars, MediumStars, BigStars };
