import React from 'react';
import styled, { keyframes } from 'styled-components';
import useAllPosts from '../../../hooks/useAllPosts';
import PostItem from '../PostItem';

const postFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.section`
  display: grid;
  row-gap: 20px;
  animation: ${postFadeIn} 1s;

  grid-template-columns: repeat(3, 1fr);
  column-gap: calc((${props => props.theme.inner.desktop} - 360px * 3) / 2);
  @media ${props => props.theme.device.tablet} {
    column-gap: calc(${props => props.theme.inner.tablet} - 360px * 2);
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.device.mobile} {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PostList = () => {
  const posts = useAllPosts();

  const postItems = posts.map(post => <PostItem key={post.id} post={post} />);

  return <Container>{postItems}</Container>;
};

export default PostList;
