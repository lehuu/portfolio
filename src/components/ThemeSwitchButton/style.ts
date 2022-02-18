import { darken } from 'polished';
import styled from 'styled-components';

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
    background: ${({ theme }) => darken(0.1, theme.themeSwitcher.backgroundColor)};
  }
`;

export default { Button };
