import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const HooksApp = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div className="ui container">
      <div>
        <button
          type="button"
          className="ui button pink"
          onClick={() => setResource('posts')}
        >
          Posts
        </button>
        <button
          type="button"
          className="ui button pink"
          onClick={() => setResource('todos')}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
      <UserList />
    </div>
  );
};

export default HooksApp;
