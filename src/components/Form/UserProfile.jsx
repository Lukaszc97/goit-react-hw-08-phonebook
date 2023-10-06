import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser} from '../../Redux/auth/operations';

export const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');

  const handleUpdateProfile = () => {
    dispatch(refreshUser({ name: newName }));

    setNewName('');
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <input
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};


