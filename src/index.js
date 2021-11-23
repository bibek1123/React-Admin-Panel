import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-quill/dist/quill.snow.css';
import App from './App';
import { store } from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    
  </>,
  document.getElementById('root')
);
