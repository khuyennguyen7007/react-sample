import { useUsers } from '@web/services/user/hooks/use-users.hook';
import React from 'react';

export const UserPage = () => {
  const users = useUsers();
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};
