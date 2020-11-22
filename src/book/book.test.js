import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

describe('Book Component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
