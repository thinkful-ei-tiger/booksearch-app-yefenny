import React, { Component } from 'react';
import './filterBar.css';

export default class FilterBar extends Component {
  render() {
    const { changeFilter, changePrintType } = this.props;
    return (
      <div className='FilterBar'>
        <label htmlFor='printType'>Print Type</label>
        <select
          name='printType'
          id='printType'
          onChange={(e) => changePrintType(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='printType'>Book Type</label>
        <select
          name='bookType'
          id='bookType'
          onChange={(e) => changeFilter(e.target.value)}
        >
          <option value=''>No Filter</option>
          <option value='free-ebooks'>Free ebooks</option>
          <option value='paid-ebooks'>Paid ebooks</option>
        </select>
      </div>
    );
  }
}
