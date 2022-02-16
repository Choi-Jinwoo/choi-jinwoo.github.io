import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { Post } from '../../hooks/useAllPosts';
import Layout from '../Layout';
import styled from 'styled-components';
import Image, { FluidObject } from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Tag from '../Tag';
import PostStyle from '../../styles/postStyle';
import useSiteMetaData from '../../hooks/useSiteMetaData';
import useAppendUtterances from '../../hooks/useAppendUtterances';
import CodeBlock from './CodeBlock';
import PostComment from '../PostComment';

const PostContainer = styled.article`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const PostTitleSection = styled.section`
  margin: 40px 0px;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.xxxLarge};
  font-weight: bold;
`;

const Description = styled.h2`
  font-size: ${props => props.theme.sizes.medium};
  color: ${props => props.theme.colors.gray3};
  margin: 20px 0px 20px 0px;
`;

const TagsDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tags = styled.div`
  display: flex;
  & > * + * {
    margin-left: 8px;
  }
`;

const Date = styled.span`
  color ${props => props.theme.colors.gray5};
`;

type ThumbnailProps = {
  fluid: FluidObject | FluidObject[];
};

const Thumbnail = styled(Image).attrs({
  className: 'post-item-thumbnail',
})<ThumbnailProps>`
  width: 100%;
  border-radius: 8px;
`;

const PostContentSection = styled.section`
  margin-top: 60px;
  ${PostStyle};
`;

const CommentSection = styled.section`
  margin-top: 40px;
`;

type Props = {
  data: {
    mdx: { body: string } & Post;
  };
};

const PostPage = ({ data }: Props) => {
  const { body } = data.mdx;
  const { title, description, tags, date, thumbnail } = data.mdx.frontmatter;
  const { siteUrl } = useSiteMetaData();

  const tagItems = tags.map((tag, index) => (
    <Tag key={index} size="medium" tag={tag} />
  ));

  const composePostImagePath = (): string | undefined => {
    let imageSrc = '';

    if (!thumbnail) return undefined;

    if (Array.isArray(thumbnail.childImageSharp.fluid)) {
      imageSrc = thumbnail.childImageSharp.fluid[0].src;
    } else {
      imageSrc = thumbnail.childImageSharp.fluid.src;
    }

    return `${siteUrl}${imageSrc}`;
  };

  return (
    <Layout
      path="/post"
      title={title}
      description={description}
      image={composePostImagePath()}
    >
      <PostContainer>
        <PostTitleSection>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <TagsDateWrapper>
            <Tags>{tagItems}</Tags>
            <Date>{date}</Date>
          </TagsDateWrapper>
        </PostTitleSection>

        {
          thumbnail && <Thumbnail fluid={thumbnail.childImageSharp.fluid} />
        }
        <PostContentSection>
          <MDXProvider
            components={{
              pre: CodeBlock,
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </PostContentSection>

        <CommentSection>
          <PostComment />
        </CommentSection>
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
