import React from 'react';
import { graphql } from 'gatsby';
import { Post } from '../../hooks/useAllPosts';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Image, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const PostContainer = styled.article`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.xxxLarge};
  font-weight: bold;
`;

const Description = styled.h2`
  font-size: ${props => props.theme.sizes.medium};
  color: ${props => props.theme.colors.gray4};
`;

type ThumbnailProps = {
  fluid: FluidObject | FluidObject[];
};

const Thumbnail = styled(Image).attrs({
  classname: 'post-item-thumbnail',
})<ThumbnailProps>`
  width: 100%;
`;

type Props = {
  data: {
    mdx: { body: string } & Post;
  };
};

const PostPage = ({ data }: Props) => {
  const { body } = data.mdx;
  const { title, description, tags, date, thumbnail } = data.mdx.frontmatter;

  return (
    <Layout path="/post">
      <PostContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Thumbnail fluid={thumbnail.childImageSharp.fluid} />
        <MDXRenderer>{body}</MDXRenderer>
      </PostContainer>
    </Layout>
  );
};

export const query = graphql`
  query PostPageQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        date(formatString: "YYYY.MM.DD.")
        title
        description
        tags
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PostPage;
