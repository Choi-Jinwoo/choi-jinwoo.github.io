import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image, { FluidObject } from 'gatsby-image';
import { Post } from '../../../../hooks/useAllPosts';
import Tag from '../../../Tag';

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`;

const ContentWrapper = styled.div`
  flex: 8;
`;

const Title = styled.h2`
  font-size: ${props => props.theme.sizes.medium};
  font-weight: bold;
  color: ${props => props.theme.colors.gray7};
`;

const Date = styled.p`
  font-size: ${props => props.theme.sizes.regular};
  color: ${props => props.theme.colors.gray5};
`;

const Description = styled.p`
  font-size: ${props => props.theme.sizes.regular};
  color: ${props => props.theme.colors.gray5};
  margin-top: 4px;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

const DateTagWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const ThumbnailWrapper = styled.div`
  flex: 2;
  overflow: hidden;
  border-radius: 4px;
`;

const Thumbnail = styled(Image)<{
  fluid: FluidObject | FluidObject[];
}>`
  width: 100%;
  height: 100%;
`;

type Props = {
  post: Post;
};

const PostListItem = ({ post }: Props) => {
  const tagItems = post.frontmatter.tags.map((tag, index) => (
    <Tag key={index} tag={tag} />
  ));

  return (
    <Link to={`/post/${post.slug}`}>
      <Container>
        <ContentWrapper>
          <Title>{post.frontmatter.title}</Title>
          <Description>{post.frontmatter.description}</Description>
          <DateTagWrapper>
            <Date>{post.frontmatter.date}</Date>
            <Tags>{tagItems}</Tags>
          </DateTagWrapper>
        </ContentWrapper>
        {post.frontmatter.thumbnail ? (
          <ThumbnailWrapper>
            <Thumbnail
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
            />
          </ThumbnailWrapper>
        ) : null}
      </Container>
    </Link>
  );
};

export default PostListItem;
