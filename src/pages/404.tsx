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
`;

const NotfoundText = styled.p`
  font-size: ${props => props.theme.sizes.large};
  color: ${props => props.theme.colors.gray7};
  font-weight: bold;
`;

const ToIndexPageText = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.gray5};
  margin-top: 40px;

  &:hover {
    color: ${props => props.theme.colors.gray3};
  }
`;

const NotfoundPage = () => {
  return (
    <Layout path="/notfound" title="페이지를 찾을 수 없습니다">
      <Container>
        <NotfoundText>페이지가 없네요 :(</NotfoundText>
        <Link to="/">
          <ToIndexPageText>홈으로</ToIndexPageText>
        </Link>
      </Container>
    </Layout>
  );
};

export default NotfoundPage;
