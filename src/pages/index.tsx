import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/Main/PostList';

const IndexPage = () => {
  return (
    <Layout path="/">
      <PostList />
    </Layout>
  );
};

export default IndexPage;
