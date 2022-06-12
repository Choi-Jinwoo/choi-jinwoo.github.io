import React from 'react';
import Layout from '../components/Layout';
import PostContainer from '../components/Main/PostContainer';
import useSiteMetaData from '../hooks/useSiteMetaData';

const IndexPage = () => {
  const { description } = useSiteMetaData();

  return (
    <Layout path="/" title="홈" description={description}>
      <PostContainer />
    </Layout>
  );
};

export default IndexPage;
