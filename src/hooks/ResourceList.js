/* eslint-disable react/prop-types */
import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div className="ui message">
      <div className="header">
        {`You fetched ${resource}`}
      </div>
      <p>{`Number of records fetched: ${resources.length}`}</p>
    </div>
  );
};

export default ResourceList;
