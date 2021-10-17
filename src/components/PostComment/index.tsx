import React, { useRef } from 'react';
import styled from 'styled-components';
import useAppendUtterances from '../../hooks/useAppendUtterances';

const Container = styled.div``;

const PostComment = () => {
  const commentRef = useRef(null);
  useAppendUtterances(commentRef);

  return <Container ref={commentRef} />;
};

export default PostComment;
