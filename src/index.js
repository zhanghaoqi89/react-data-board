import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import GlobalData from './stores/GlobalData.js'
import './index.css';

const data = new GlobalData()

ReactDOM.render(
  <Provider GlobalData={data}>
    <App />
  </Provider>,
  document.getElementById('root')
);
