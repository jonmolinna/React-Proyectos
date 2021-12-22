import React from 'react';
import './App.css';
import Login from './Componentes/Login';
import Message from './Componentes/Message';
import { ToastContainer } from 'react-toastify';

import { useAuthState } from './reducers/userReducer.js';

function App() {
  const { username } = useAuthState();

  return (
    <div className="app">
      {
        username? <Message /> : <Login />
      }
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
};

export default App;