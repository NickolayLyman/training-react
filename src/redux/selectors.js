import { createSelector } from '@reduxjs/toolkit';
export const fetchPosts = state => state.posts.items;

export const getPosts = createSelector([fetchPosts], posts => {
  return posts;
});
