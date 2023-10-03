import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/SliceReducer';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    dispatch(setFilter(searchTerm));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts by name"
      className={styles.input}
    />
  );
};

export default Filter;
