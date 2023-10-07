import React from 'react';
import {UserProfile} from '../../components/Form/UserProfile/UserProfile';  
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import {UserMenu} from '../../components/Usermenu/UserMenu';
import { useSelector } from 'react-redux';


const ContactsPage = () => {
  const user = useSelector(state => state.auth.user);

  

  return (
    <>
      <UserProfile />
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList/>
      <p>Welcome, {user.name}!</p>
      <UserMenu />
    </>
  );
};

export default ContactsPage;
