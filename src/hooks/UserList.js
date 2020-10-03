import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <div className="ui list">
      {users.map((user) => {
        return (
          <div className="item">
            <i className="users icon" />
            <div className="content">
              <div key={user.id}>
                {user.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
