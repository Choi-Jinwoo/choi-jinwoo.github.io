import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/Main/PostList';
import useSiteMetaData from '../hooks/useSiteMetaData';

const IndexPage = () => {
  const { title } = useSiteMetaData();

  return (
    <Layout path="/" title={title}>
      <PostList />
    </Layout>
  );
};

export default IndexPage;
