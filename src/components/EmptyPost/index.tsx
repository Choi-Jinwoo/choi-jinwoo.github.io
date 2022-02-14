import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.medium};
  text-align: center;
  color: ${props => props.theme.colors.gray3};
`;

type Props = {
  searchKeyword: string;
}

const EmptyPost = ({ searchKeyword }: Props) => {
  return (
    <Container>
      <Title>{searchKeyword !== '' ? `'${searchKeyword}'에 대한 검색 결과가 없습니다` : '글이 작성되지 않았습니다'}</Title>
    </Container>
  )
}

export default EmptyPost;