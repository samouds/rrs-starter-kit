import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

const H2 = props => (
  <h2 className={ classnames(styles.h2, props.className) }>{ props.children }</h2>
);

export default H2;
