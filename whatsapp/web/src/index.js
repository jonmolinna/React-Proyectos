import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './reducers/userReducer.js';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);