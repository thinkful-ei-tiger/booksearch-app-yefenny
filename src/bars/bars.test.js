import React from 'react';
import ReactDOM from 'react-dom';
import Bars from './Bars';

describe('Bars Component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bars />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
