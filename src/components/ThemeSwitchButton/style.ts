import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { mixinTransition } from '@styles';
import Moon from '@icons/moon.svg';
import Sun from '@icons/sun.svg';

interface IconProps {
  readonly $isVisible: boolean;
}

const commonIconStyle = css<IconProps>`
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'rotateZ(0deg)' : 'rotateZ(-360deg)')};
  ${mixinTransition('all')}
`;

const MoonIcon = styled(Moon)`
  ${commonIconStyle}
`;

const SunIcon = styled(Sun)`
  position: absolute;
  ${commonIconStyle}
`;

const Button = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.gaps.l};
  top: calc(100% + ${({ theme }) => theme.gaps.m});

  padding: ${({ theme }) => theme.gaps.s};
  background: ${({ theme }) => theme.themeSwitcher.backgroundColor};
  border-radius: ${({ theme }) => theme.border.radius};
  svg {
    height: ${({ theme }) => theme.font.size.l};
    color: ${({ theme }) => theme.themeSwitcher.iconColor};
  }

  :hover {
    cursor: pointer;
    background: ${({ theme }) => darken(0.15, theme.themeSwitcher.backgroundColor)};
  }
`;

export default { Button, MoonIcon, SunIcon };
