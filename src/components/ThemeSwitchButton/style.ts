import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mixinTransition } from '@styles';
import Moon from '@icons/moon.svg';
import Sun from '@icons/sun.svg';

interface IconProps {
  readonly $isVisible: boolean;
}

const commonIconStyle = ({ $isVisible }: IconProps) => css`
  visibility: ${$isVisible ? 'visible' : 'hidden'};
  opacity: ${$isVisible ? 1 : 0};
  transform: ${$isVisible ? 'rotateZ(0deg)' : 'rotateZ(-360deg)'};
  ${mixinTransition('all')}
`;

const MoonIcon = styled(Moon)<IconProps>`
  ${(props) => commonIconStyle(props)}
`;

const SunIcon = styled(Sun)`
  position: absolute;
  ${(props) => commonIconStyle(props)}
`;

const Button = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.space.l};
  top: calc(100% + ${({ theme }) => theme.space.m});

  padding: ${({ theme }) => theme.space.s};
  background: ${({ theme }) => theme.colors.themeSwitcher.backgroundColor};
  border-radius: ${({ theme }) => theme.radii.regular};
  svg {
    height: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.themeSwitcher.iconColor};
  }

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.themeSwitcher.hoverBgColor};
  }
`;

export default { Button, MoonIcon, SunIcon };
