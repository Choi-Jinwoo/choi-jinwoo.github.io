import React from 'react';
import { Post } from '../../../hooks/useAllPosts';
import PostGalleryView from '../PostGalleryView';
import PostListView from '../PostListView';

export type PostViewFormats = 'gallery' | 'list';

export type BasePostViewProps = {
  posts: Post[];
};

type Props = {
  viewFormat: PostViewFormats;
} & BasePostViewProps;

const viewFormat2ComponentMap: Record<
  PostViewFormats,
  React.FC<BasePostViewProps>
> = {
  gallery: PostGalleryView,
  list: PostListView,
};

const PostView = ({ viewFormat, ...basePostViewProps }: Props) => {
  return viewFormat2ComponentMap[viewFormat]({
    ...basePostViewProps,
  });
};

export default PostView;
