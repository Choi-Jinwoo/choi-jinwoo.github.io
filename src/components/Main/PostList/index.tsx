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
  grid-template-columns: repeat(3, 1fr);
  column-gap: calc((${props => props.theme.inner.width} - 360px * 3) / 2);
  row-gap: 20px;
  animation: ${postFadeIn} 1s;
`;

const PostList = () => {
  const posts = useAllPosts();

  const postItems = posts.map(post => <PostItem key={post.id} post={post} />);

  return <Container>{postItems}</Container>;
};

export default PostList;
