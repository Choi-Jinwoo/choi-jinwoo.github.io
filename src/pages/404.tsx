import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.xxxLarge};
  color: ${props => props.theme.colors.gray7};
  font-weight: bold;
`;

const Description = styled.p`
  font-size: ${props => props.theme.sizes.regular};
  color: ${props => props.theme.colors.gray5};
  margin-bottom: 40px;
`;

const GoBackButton = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.gray7};
  color: ${props => props.theme.colors.white};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.gray6};
  }
`;

const NotfoundPage = () => {
  return (
    <Layout path="/notfound" title="페이지를 찾을 수 없습니다">
      <Container>
        <Title>404</Title>
        <Description>Sorry, we could not find this page.</Description>
        <Link to="/">
          <GoBackButton>Go back home</GoBackButton>
        </Link>
      </Container>
    </Layout>
  );
};

export default NotfoundPage;
