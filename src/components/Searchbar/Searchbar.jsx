import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
  SearchbarWrapperStyle,
  SearchFormStyle,
  SearchFormButtonStyle,
  SearchFormButtonLabelStyle,
  SearchFormInputStyle,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <SearchbarWrapperStyle>
      <SearchFormStyle onSubmit={handleSubmit}>
        <SearchFormButtonStyle type="submit">
          <FaSearch />
          <SearchFormButtonLabelStyle>Search</SearchFormButtonLabelStyle>
        </SearchFormButtonStyle>

        <SearchFormInputStyle
          onChange={handleChange}
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchFormStyle>
    </SearchbarWrapperStyle>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
