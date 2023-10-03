
import axios from 'axios';

const BASE_URL = 'https://6519cc9e340309952f0cb9b8.mockapi.io/contacts';

export const fetchContacts = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createContact = async (endpoint, contactData) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (endpoint, id) => {
  try {
    await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
  } catch (error) {
    throw error;
  }
};
