import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes } from 'actionTypes/post';


/**
 * Logout Saga
 * @param  {string} access_token
 * @return {fetch}
 */
export function getPostsRequest() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export function* getPosts() {
  try {
    const result = yield call(getPostsRequest);
    yield put({ type: actionTypes.GET_POSTS_SUCCESS, posts: result.data });
  } catch (e) {
    yield put({ type: actionTypes.GET_POSTS_FAILURE, message: e.message });
  }
}
