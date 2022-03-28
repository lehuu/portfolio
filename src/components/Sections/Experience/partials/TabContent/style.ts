import styled from '@emotion/styled';
import { breakpoints } from '@styles';

const Container = styled.div`
  @media ${breakpoints.tablet} {
    flex: 1 1 auto;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: ${(props) => props.theme.space.xs};
`;

const Title = styled.h4`
  display: inline;
  font-size: inherit;
  color: ${(props) => props.theme.colors.textStrong};
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.accent};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const DateContainer = styled.div`
  margin-bottom: ${(props) => props.theme.space.l};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

const TaskContainer = styled.div`
  ul {
    list-style: none;
    padding-left: ${(props) => props.theme.fontSizes.m};
    li {
      margin-bottom: ${(props) => props.theme.space.m};

      &::before {
        content: '•';
        color: ${(props) => props.theme.colors.accent};
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1rem; /* Also needed for space (tweak if needed) */
        margin-left: -1rem; /* Also needed for space (tweak if needed) */
      }
    }
  }
`;

export default { Container, Link, Title, TitleContainer, DateContainer, TaskContainer };
