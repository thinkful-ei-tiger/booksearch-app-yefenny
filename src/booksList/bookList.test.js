import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './bookList';

describe('BookList Component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
