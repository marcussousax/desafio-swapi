import React from 'react';
import ReactDOM from 'react-dom';
import AppLogo from './AppLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});