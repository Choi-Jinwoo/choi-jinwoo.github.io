import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useAllPosts, { Post } from '../../../hooks/useAllPosts';
import { parseQuerystring } from '../../../utils/query';
import EmptyPost from '../../EmptyPost';
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
  margin-bottom: 80px;
`;

const SearchContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
`;

const NumberOfPosts = styled.span`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.gray5};
  font-weight: bold;
`;

const SearchInput = styled.input`
  border: 1px solid ${props => props.theme.colors.gray2};
  background-color: ${props => props.theme.colors.gray0};
  border-radius: 8px;
  height: 32px;
  padding: 4px 8px;
  box-sizing: border-box;
  width: 200px;
  outline: none;
  color: ${props => props.theme.colors.gray6};

  &:focus {
    border-color: ${props => props.theme.colors.gray3};
  }
`;

const PostContainer = styled.section`
  display: grid;
  row-gap: 48px;
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

const isMatchPost = (post: Post, keyword: string) => {
  const { title, tags } = post.frontmatter;
  if (title.toLowerCase().includes(keyword.toLowerCase())) return true;

  return tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()));
};

const composeNumberOfPostsText = (prefix: string, numberOfPosts) => {
  return `${prefix} (${numberOfPosts})`;
};

const SEARCH_KEYWORD_QUERY_KEY = 'q';

const PostList = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const posts = useAllPosts();

  useEffect(() => {
    const searchKeywordInQuerystring = parseQuerystring(
      location.search,
      SEARCH_KEYWORD_QUERY_KEY
    );
    if (searchKeywordInQuerystring === null) return;

    setSearchKeyword(searchKeywordInQuerystring);
  }, []);

  useEffect(() => {
    // Sync querystring and searchKeyword state
    if (searchKeyword === '') {
      history.pushState({}, null, '/');
    } else {
      history.pushState(
        {},
        null,
        `?${SEARCH_KEYWORD_QUERY_KEY}=${searchKeyword}`
      );
    }
  }, [searchKeyword]);

  const searchedPosts =
    searchKeyword !== ''
      ? posts.filter(post => isMatchPost(post, searchKeyword))
      : posts;

  const postItems = searchedPosts.map(post => (
    <PostItem key={post.id} post={post} />
  ));

  return (
    <Container>
      <SearchContainer>
        <NumberOfPosts>
          {composeNumberOfPostsText(
            searchKeyword === '' ? '전체 글' : `'${searchKeyword}' 검색 결과`,
            searchedPosts.length
          )}
        </NumberOfPosts>
        <SearchInput
          placeholder="검색어를 입력하세요."
          value={searchKeyword}
          onChange={({ target }) => setSearchKeyword(target.value)}
        />
      </SearchContainer>
      {postItems.length > 0 ? (
        <PostContainer>{postItems}</PostContainer>
      ) : (
        <EmptyPost searchKeyword={searchKeyword} />
      )}
    </Container>
  );
};

export default PostList;
