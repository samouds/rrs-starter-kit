import { actionTypes } from 'actionTypes/post';
import reducer from '../post';

describe('post reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {

      }))
    .toEqual({
      loading: false,
      posts: [],
      error: ''
    });
  });

  it('should handle GET_POSTS_REQUEST', () => {
    expect(
      reducer({
        loading: false,
        posts: [],
        error: ''
      }, {
        type: actionTypes.GET_POSTS_REQUEST
      }))
    .toEqual({
      loading: true,
      posts: [],
      error: ''
    });
  });

  it('should handle GET_POSTS_SUCCESS', () => {
    expect(
      reducer({
        loading: true,
        posts: [],
        error: ''
      }, {
        type: actionTypes.GET_POSTS_SUCCESS, posts: [{ "id": 1, "title":"title 1" }, { "id": 2, "title":"title 2" }]
      }))
    .toEqual({
      loading: false,
      posts: [{"id": 1, "title":"title 1"},{"id": 2, "title":"title 2"}],
      error: ''
    });
  });

  it('should handle GET_POSTS_FAILURE', () => {
    expect(
      reducer({
        loading: true,
        posts: [],
        error: ''
      }, {
        type: actionTypes.GET_POSTS_FAILURE, message: "error message"
      }))
    .toEqual({
      loading: false,
      posts: [],
      error: "error message"
    });
  });



})
