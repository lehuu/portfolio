import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '@components';
import styled from '@emotion/styled';
import { breakpoints } from '@styles';

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  display: block;
  font-size: clamp(2rem, 40vw, 10rem);
  @media ${breakpoints.mobileL} {
    font-size: 10rem;
  }
`;
const SubHeader = styled.h2`
  text-align: center;
  display: block;
  font-size: clamp(1.5rem, 15vw, 3rem);
  @media ${breakpoints.mobileL} {
    font-size: 3rem;
  }
  margin-bottom: ${({ theme }) => theme.space.xxxl};
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;
const Container = styled.section`
  align-self: center;
`;

const NotFoundPage = () => (
  <Layout additionalTitle="Not Found">
    <Container>
      <Header>404</Header>
      <SubHeader>Page Not Found</SubHeader>
      <StyledLink to="/">Go home</StyledLink>
    </Container>
  </Layout>
);

export default NotFoundPage;
