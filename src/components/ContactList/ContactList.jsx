import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { deleteContactAsync } from '../../Redux/operations';

const Contact = ({ id, name, phone, onDeleteClick }) => {
  return (
    <li className={styles.listItem}>
      {name}: {phone || 'No number provided'}
      <button onClick={() => onDeleteClick(id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = async (contactId) => {
    try {
     
      const existingContact = contacts.find((contact) => contact.id === contactId);

      if (!existingContact) {
        alert(`Contact with ID "${contactId}" not found.`);
        return;
      }

      await dispatch(deleteContactAsync({ endpoint: 'contacts', id: contactId }));
      
   
    } catch (error) {
      console.error("An error occurred while deleting the contact: ", error);
    }
  };

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={styles.contactList}>
          {filteredContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              onDeleteClick={handleDeleteContact} 
            />
          ))}
        </ul>
      ) : (
        <p>No contacts to display.</p>
      )}
    </div>
  );
};

export default ContactList;
