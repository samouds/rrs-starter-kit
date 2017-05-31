import { actionTypes } from 'actionTypes/post';

export const initialState = {
  loading: false,
  posts: [],
  error: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    /* INIT_LME_REQUEST */
    case actionTypes.GET_POSTS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts };
    case actionTypes.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.message };

    /* DEFAULT */
    default:
      return state;
  }
}
