import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { deleteContactAsync } from '../../../Redux/PhonebookReducer/operations';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items || []);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={styles.listItem}>
              {contact.name}: {contact.number || 'No number provided'}
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts to display.</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

export default ContactList;
