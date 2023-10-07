import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Redux/filterReducer';
import styles from './Filter.module.css';

const Filter = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state?.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value;
    dispatch(setFilter(searchTerm));
  };

  
  const shouldShowFilter = contacts && contacts.length > 1;

  return (
    shouldShowFilter && (
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Wyszukaj kontakty po nazwie"
        className={styles.input}
      />
    )
  );
};

export default Filter;
