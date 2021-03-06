import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';

document.addEventListener('DOMContentLoaded', () => {
  let content = document.getElementById('root');
  ReactDOM.render(<Widget />, content);
});
