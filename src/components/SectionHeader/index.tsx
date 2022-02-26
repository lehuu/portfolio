import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.m};
  margin-bottom: ${({ theme }) => theme.space.l};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.textStrong};
`;

const Line = styled.div`
  flex: 1 1 100%;
  border-top: 1px solid ${({ theme }) => theme.borders.bold};
  height: 1px;
`;

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({ title }) => (
  <Container>
    <Line />
    <Title>{title}</Title>
    <Line />
  </Container>
);

export default SectionHeader;
