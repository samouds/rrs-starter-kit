import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const PostsList = props => (
  <ul className={ classnames(styles.list, props.className) }>
    { props.posts.map(post => (
      <li key={ post.id } className={ styles.item }>{ post.title }</li>
    )) }
  </ul>
);

export default PostsList;
