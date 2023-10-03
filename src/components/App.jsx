
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContactsAsync } from '../Redux/operations'; 
import { selectError } from '../Redux/SliceReducer';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsAsync('contacts')); 
  }, [dispatch]);

  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}

export default App;
