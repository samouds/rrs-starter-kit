import { takeEvery, all } from 'redux-saga/effects';
import { actionTypes } from 'actionTypes';

import { getPosts } from './post';

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_POSTS_REQUEST, getPosts)
  ]);
}
