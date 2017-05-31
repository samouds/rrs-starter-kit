import { createSelector } from 'reselect';

const selectPostState = () => state => (state.post);

const selectPosts = () => createSelector(
  selectPostState(),
  postState => postState.posts.filter(post => post.title !== 'laboriosam dolor voluptates')
);

export {
  selectPostState,
  selectPosts
};
