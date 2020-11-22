import React, { Component } from 'react';
import './searchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className='SearchBar'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSearch();
          }}
        >
          <label htmlFor='term'>Search: </label>
          <input
            type='text'
            name='term'
            placeholder='Insert term'
            id='term'
            onChange={(e) => this.props.changeTerm(e.target.value)}
            required
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  }
}
