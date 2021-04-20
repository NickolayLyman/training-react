import { createAction } from '@reduxjs/toolkit';

export const fetchPostsRequest = createAction('posts/fetchPostsRequest');
export const fetchPostsSuccess = createAction('posts/fetchPostsSuccess');
export const fetchPostsError = createAction('posts/fetchPostsError');

export const addPostsRequest = createAction('posts/addPostsRequest');
export const addPostsSuccess = createAction('posts/addPostsSuccess');
export const addPostsError = createAction('posts/addPostsError');

export const deletePostsRequest = createAction('posts/deletePostsRequest');
export const deletePostsSuccess = createAction('posts/deletePostsSuccess');
export const deletePostsError = createAction('posts/deletePostsError');
