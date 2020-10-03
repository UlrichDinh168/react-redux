/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ApproveCard = (props) => {
  const { actions, children } = props;
  return (
    <div className="ui card">
      <div className="content">
        <div className="ui comments center aligned container">
          {children}
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">
            {actions[0]}
          </div>
          <div className="ui basic red button">
            {actions[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

ApproveCard.defaultProps = {
  children: 'Are you sure?',
  actions: ['Yes', 'No'],
};

ApproveCard.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.array,
};

export default ApproveCard;
