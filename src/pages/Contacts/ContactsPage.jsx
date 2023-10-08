import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';


const ContactsPage = () => {
  

  

  return (
    <>
  
      <h2>Contacts</h2>
      
      <ContactForm />
      <Filter />
      <ContactList/>
     
      
    </>
  );
};

export default ContactsPage;
