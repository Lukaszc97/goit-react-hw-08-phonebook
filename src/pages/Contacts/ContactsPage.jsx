import React from 'react';

import ContactForm from '../../components/Phonebook/ContactForm/ContactForm';
import Filter from '../../components/Phonebook/Filter/Filter';
import ContactList from '../../components/Phonebook/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <>
      <h2>Contacts</h2>

      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
