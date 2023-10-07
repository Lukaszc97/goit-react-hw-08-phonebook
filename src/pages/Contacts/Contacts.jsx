import React from 'react';
import { Helmet } from 'react-helmet';
import ContactsPage from './ContactsPage';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
     <ContactsPage/>
    </>
  );
}
