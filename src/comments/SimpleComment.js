import React from 'react';
import PropTypes from 'prop-types';

const SimpleComment = (props) => {
  const { avatar, author, text } = props;

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">{author}</a>
        <div className="text">
          {text}
        </div>
      </div>
    </div>
  );
};

SimpleComment.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SimpleComment;
