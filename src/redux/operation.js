import axios from 'axios';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addPostsRequest,
  addPostsSuccess,
  addPostsError,
  deletePostsRequest,
  deletePostsSuccess,
  deletePostsError,
} from './action';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchedPost = () => async dispatch => {
  dispatch(fetchPostsRequest());
  try {
    const { data } = await axios.get('posts');
    return dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};

export const addPost = posts => async dispatch => {
  dispatch(addPostsRequest());
  try {
    const { data } = await axios.post('posts', posts);
    return dispatch(addPostsSuccess(data));
  } catch (error) {
    return dispatch(addPostsError(error.message));
  }
};

export const deletePost = id => async dispatch => {
  dispatch(deletePostsRequest());
  try {
    await axios.delete(`posts/${id}`);
    return dispatch(deletePostsSuccess(id));
  } catch (error) {
    return dispatch(deletePostsError(error.message));
  }
};
