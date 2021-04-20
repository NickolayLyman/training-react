import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchPostsSuccess,
  addPostsSuccess,
  deletePostsSuccess,
} from './action';

const initialState = {
  posts: {
    items: [],
  },
};

const items = createReducer(initialState.posts.items, {
  [fetchPostsSuccess]: (_, { payload }) => payload,
  [addPostsSuccess]: (state, { payload }) => [...state, payload],
  [deletePostsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({ items });
