import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/Main/PostList';
import useSiteMetaData from '../hooks/useSiteMetaData';

const IndexPage = () => {
  const { description } = useSiteMetaData();

  return (
    <Layout path="/" title="홈" description={description}>
      <PostList />
    </Layout>
  );
};

export default IndexPage;
