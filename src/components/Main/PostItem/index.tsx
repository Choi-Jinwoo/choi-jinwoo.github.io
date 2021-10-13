import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Post } from '../../../hooks/useAllPosts';
import Tag from '../../Tag';

const Container = styled.article`
  width: 360px;
  height: 400px;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

type ThumbnailProps = {
  fluid: FluidObject | FluidObject[];
};

const Thumbnail = styled(Image)<ThumbnailProps>`
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${props => props.theme.sizes.medium};
  font-weight: bold;
  margin: 16px 0px 8px 0px;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${props => props.theme.colors.gray3};
  text-overflow: ellipsis;
  margin-bottom: 8px;
  font-size: ${props => props.theme.sizes.small};
`;

const Date = styled.span`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.gray4};
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
          <Thumbnail fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
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
