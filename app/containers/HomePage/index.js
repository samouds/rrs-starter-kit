import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions } from 'actions';
import { selectPosts } from 'selectors/post';

import H2 from 'components/H2';
import Button from 'components/Button';
import PostsList from 'components/PostsList';

import styles from './styles.less';

class HomePage extends Component {
  componentDidMount() {

  }

  fetchPosts = () => {
    this.props.getPosts();
  }

  render() {
    return (
      <div className={ styles.homepage }>
        <H2>Homepage</H2>
        <Button onClick={ this.fetchPosts }>Fetch Posts</Button>
        { this.props.posts && <PostsList posts={ this.props.posts } /> }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts()
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(actions.getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
