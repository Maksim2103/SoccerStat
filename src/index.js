import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App className={classes.App} />
  </React.StrictMode>,
  document.getElementById('root'),
);
