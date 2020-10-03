/* eslint-disable react/prop-types */
import React from 'react';

const Divider = (props) => {
  const { text } = props;
  return (
    <div className="ui horizontal divider">
      {text || 'Next section'}
    </div>
  );
};

export default Divider;
