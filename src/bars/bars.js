import React, { Component } from 'react';
import SearchBar from '../searchBar/searchBar';
import FilterBar from '../filterBar/filterBar';
import './bars.css';

export default function Bars(props) {
  const { handleSearch, changePrintType, changeTerm, changeFilter } = props;
  return (
    <div>
      <SearchBar handleSearch={handleSearch} changeTerm={changeTerm} />
      <FilterBar
        changePrintType={changePrintType}
        changeFilter={changeFilter}
      />
    </div>
  );
}
