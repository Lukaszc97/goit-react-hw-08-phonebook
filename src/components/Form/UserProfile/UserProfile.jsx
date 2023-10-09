/* import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUsername } from '../../../Redux/auth/operations';

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [newUsername, setNewUsername] = useState('');

  const handleUsernameChange = event => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    
    dispatch(changeUsername(newUsername))
      .unwrap()
      .then(() => {
     
        alert('Nazwa użytkownika została zmieniona');
        setNewUsername('');
      })
      .catch(error => {
       
        alert(
          'Wystąpił błąd podczas zmiany nazwy użytkownika: ' + error.message
        );
      });
  };

  return (
    <div>
      <h2>Zmień nazwę użytkownika</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nowa nazwa użytkownika"
          value={newUsername}
          onChange={handleUsernameChange}
        />
        <button type="submit">Zmień</button>
      </form>
    </div>
  );
}

export default UserProfile;
 */