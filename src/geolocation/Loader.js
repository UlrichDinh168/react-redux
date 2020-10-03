import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { text } = props;

  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{text}</div>
    </div>
  );
};

Loader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loader;
