import React from 'react';
import styled from 'styled-components';
import { Post } from '../../../hooks/useAllPosts';
import { BasePostViewProps } from '../PostView';
import PostListItem from './PostListItem';

const Container = styled.section``;

const GroupByYearContainer = styled.div`
  margin-bottom: 20px;
`;

const YearHadingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const YearHeading = styled.h2`
  font-size: ${props => props.theme.sizes.xxLarge};
  font-weight: bold;
  color: ${props => props.theme.colors.gray3};
  padding-bottom: 12px;
`;

const YearGroupDivider = styled.div`
  background: ${props => props.theme.colors.gray1};
  height: 4px;
  width: 100%;
`;

type Props = {} & BasePostViewProps;

const groupByYear = (posts: Post[]) => {
  return posts.reduce((groupedPosts, post) => {
    const year = new Date(post.frontmatter.date).getFullYear();

    if (year in groupedPosts) {
      groupedPosts[year].push(post);
      return groupedPosts;
    } else {
      groupedPosts[year] = [post];
      return groupedPosts;
    }
  }, {} as Record<number, Post[]>);
};

const PostListView = ({ posts }: Props) => {
  const groupedPosts = groupByYear(posts);

  const postItems = Object.entries(groupedPosts)
    .map(([year, posts]) => {
      return (
        <GroupByYearContainer>
          {year === new Date().getFullYear().toString() ? null : (
            <YearHadingSection>
              <YearHeading key={year}>{year}</YearHeading>
              <YearGroupDivider />
            </YearHadingSection>
          )}

          {posts.map(post => (
            <PostListItem key={post.id} post={post} />
          ))}
        </GroupByYearContainer>
      );
    })
    .reverse();

  return <Container>{postItems}</Container>;
};

export default PostListView;
