import { actionTypes } from 'actionTypes/post';
import { actions } from '../post';

describe('post actions', () => {

  it('should create an action to get posts', () => {
    const expectedAction = { type: actionTypes.GET_POSTS_REQUEST };
    expect(actions.getPosts()).toEqual(expectedAction);
  });

});
