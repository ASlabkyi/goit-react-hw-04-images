import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import {
  SearchbarWrapperStyle,
  SearchFormStyle,
  SearchFormButtonStyle,
  SearchFormButtonLabelStyle,
  SearchFormInputStyle,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <SearchbarWrapperStyle>
        <SearchFormStyle onSubmit={this.handleSubmit}>
          <SearchFormButtonStyle type="submit">
            <FaSearch />
            <SearchFormButtonLabelStyle>Search</SearchFormButtonLabelStyle>
          </SearchFormButtonStyle>

          <SearchFormInputStyle
            onChange={this.handleChange}
            value={search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchFormStyle>
      </SearchbarWrapperStyle>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
