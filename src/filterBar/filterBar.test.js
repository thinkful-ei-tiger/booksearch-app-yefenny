import React from 'react';
import ReactDOM from 'react-dom';
import FilterBar from './filterBar';

describe('FilterBar Component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
