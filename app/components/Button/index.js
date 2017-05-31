import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.less';

class Button extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button
        className={ classnames(styles.button, this.props.className) }
        onClick={ this.onClick }
      >
        { this.props.children }
      </button>
    );
  }
}

export default Button;
