import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';

describe('SearchBar Component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
