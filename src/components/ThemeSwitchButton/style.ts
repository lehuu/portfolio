import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mixinTransition } from '@styles';

interface IconProps {
  readonly isVisible: boolean;
  readonly isAbsolute?: boolean;
}

const IconContainer = styled.div<IconProps>`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'rotateZ(0deg)' : 'rotateZ(-360deg)')};
  ${(props) =>
    props.isAbsolute &&
    css`
      position: absolute;
      top: ${props.theme.space.s};
    `}
  line-height: 0;
  ${mixinTransition('all')}
  svg {
    height: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.themeSwitcher.iconColor};
  }
`;

const Button = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.space.l};
  top: calc(100% + ${({ theme }) => theme.space.m});

  padding: ${({ theme }) => theme.space.s};
  background: ${({ theme }) => theme.colors.themeSwitcher.backgroundColor};
  border-radius: ${({ theme }) => theme.radii.regular};

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.themeSwitcher.hoverBgColor};
  }
`;

export default { Button, IconContainer };
