import React from 'react';
import styled from 'styled-components';
import { BasePostViewProps } from '../PostView';
import PostListItem from './PostListItem';

const Container = styled.section``;

type Props = {} & BasePostViewProps;

const PostListView = ({ posts }: Props) => {
  const postItems = posts.map(post => (
    <PostListItem key={post.id} post={post} />
  ));

  return <Container>{postItems}</Container>;
};

export default PostListView;
