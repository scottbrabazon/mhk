import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './components/Context';
import App from './components/App';
import './style.css';
import "./carousel.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
