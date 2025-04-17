import React from 'react';
import css from '../ContactForm/ContactForm.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <label htmlFor="searchInput" className={css.label}>
      <span>Find contacts by name</span>
      <input
        className={css.input}
        id="searchInput"
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default SearchBox;
