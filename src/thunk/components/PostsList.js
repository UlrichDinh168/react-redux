/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsersAction } from '../actions';
import UserHeader from './UserHeader';

class PostsList extends React.Component {
  componentDidMount() {
    const { fetchPostsAndUsers } = this.props;
    fetchPostsAndUsers();
  }

  renderList() {
    const { posts } = this.props;

    return posts.slice(8, 12).map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h3>{post.id} - {post.title}</h3>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsersAction,
})(PostsList);
