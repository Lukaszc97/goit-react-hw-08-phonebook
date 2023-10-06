import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from '../../../Redux/auth/operations';
import styles from './UserProfile.module.css'; 

export const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');

  const handleUpdateProfile = () => {
    dispatch(refreshUser({ name: newName }));

    setNewName('');
  };

  return (
    <div className={styles.userProfileContainer}> 
      <p className={styles.welcomeMessage}>Welcome, {user.name}!</p> 
      <input
        type="text"
        placeholder="New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        className={styles.inputField} 
      />
      <button onClick={handleUpdateProfile} className={styles.updateButton}>Update Profile</button> 
    </div>
  );
};
