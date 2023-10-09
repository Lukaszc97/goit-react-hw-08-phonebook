import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { createContactAsync } from '../../../Redux/PhonebookReducer/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || phone.trim() === '') return;

    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      alert('Contact already exists.');
      return;
    }

    dispatch(createContactAsync({ name, number: phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className={styles.input}
      />
      <input
        type="tel"
        name="phone"
        required
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
