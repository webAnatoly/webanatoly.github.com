/* eslint-env browser */
// eslint-env browser добавил, что-бы линтер не выдавал ошибку document is undefined
import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
