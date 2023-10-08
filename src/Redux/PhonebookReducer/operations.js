import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async (endpoint, { rejectWithValue }) => {
    try {
      const contacts = await api.fetchContacts(endpoint);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createContactAsync = createAsyncThunk(
  'contacts/createContact',
  async ({ endpoint, contactData }, { rejectWithValue }) => {
    try {
      const newContact = await api.createContact(endpoint, contactData);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async ({ endpoint, id }, { rejectWithValue }) => {
    try {
      await api.deleteContact(endpoint, id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkContactExistence = async (endpoint, contactData) => {
  try {
    const existingContacts = await api.fetchContacts(endpoint);
    return existingContacts.some(contact => {
      return contact.phone === contactData.phone;
    });
  } catch (error) {
    throw error;
  }
};
