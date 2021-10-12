import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Post } from '../../../hooks/useAllPosts';
import Tag from '../../Tag';

const Container = styled.article`
  width: 360px;
  height: 450px;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;

const PostInfoWrapper = styled.div`
  padding: 16px 0px;
`;

const Tags = styled.div`
  width: 100%;

  & > * + * {
    margin-left: 8px;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.sizes.large};
  font-weight: bold;
  margin: 16px 0px 8px 0px;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${props => props.theme.colors.gray6};
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

const Date = styled.span`
  font-size: ${props => props.theme.sizes.small};
`;

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  const tagItems = post.frontmatter.tags.map((tag, index) => (
    <Tag key={index} tag={tag} />
  ));

  return (
    <Link to="/">
      <Container>
        <ThumbnailWrapper>
          <Thumbnail src={post.frontmatter.thumbnail} />
        </ThumbnailWrapper>

        <PostInfoWrapper>
          <Tags>{tagItems}</Tags>
          <Title>{post.frontmatter.title}</Title>
          <Description>{post.frontmatter.description}</Description>
          <Date>{post.frontmatter.date}</Date>
        </PostInfoWrapper>
      </Container>
    </Link>
  );
};

export default PostItem;
