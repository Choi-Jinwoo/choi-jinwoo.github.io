import React, { MouseEventHandler } from 'react';
import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import { Post } from '../../../hooks/useAllPosts';
import Tag from '../../Tag';
import useSiteMetaData from '../../../hooks/useSiteMetaData';

const Container = styled.article`
  position: relative;
  width: 360px;
  height: 400px;

  @media ${props => props.theme.device.mobile} {
    width: 100%;
    height: auto;
  }

  &:hover .post-item-copy-button {
    display: inherit;

    @media ${props => props.theme.device.mobile} {
      display: none;
    }
  }

  &:hover .post-item-thumbnail {
    transform: scale(1.1);

    @media ${props => props.theme.device.mobile} {
      transform: none;
    }
  }
`;

const CopyButton = styled.button.attrs({ className: 'post-item-copy-button' })`
  display: none;
  position: absolute;
  z-index: 2;
  top: 12px;
  right: 12px;
  padding: 8px 12px;
  border: none;
  background-color: ${props => props.theme.colors.gray1};
  color: ${props => props.theme.colors.gray6};
  font-size: ${props => props.theme.sizes.small};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.gray2};
  }
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
`;

type ThumbnailProps = {
  fluid: FluidObject | FluidObject[];
};

const Thumbnail = styled(Image).attrs({
  className: 'post-item-thumbnail',
})<ThumbnailProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.25s;
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
  const { siteUrl } = useSiteMetaData();

  const handleCopyURLClick: MouseEventHandler = e => {
    e.preventDefault();
    navigator.clipboard.writeText(`${siteUrl}/post/${post.slug}`);
  };

  const tagItems = post.frontmatter.tags.map((tag, index) => (
    <Tag key={index} tag={tag} />
  ));

  return (
    <Container>
      <Link to={`/post/${post.slug}`}>
        <CopyButton onClick={handleCopyURLClick}>Copy URL</CopyButton>
        <ThumbnailWrapper>
          <Thumbnail fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
        </ThumbnailWrapper>

        <PostInfoWrapper>
          <Tags>{tagItems}</Tags>
          <Title>{post.frontmatter.title}</Title>
          <Description>{post.frontmatter.description}</Description>
          <Date>{post.frontmatter.date}</Date>
        </PostInfoWrapper>
      </Link>
    </Container>
  );
};

export default PostItem;
