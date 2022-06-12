import React from 'react';
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
  description: string;
};

const EmptyPost = ({ description }: Props) => {
  return (
    <Container>
      <Title>{description}</Title>
    </Container>
  );
};

export default EmptyPost;
