import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app/components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
