import React from 'react';
import './App.css';
import Login from './componentes/Login';
import Message from './componentes/Message';
import { ToastContainer } from 'react-toastify';

import { useAuthState } from './context/auth.js';

function App() {
  const { username } = useAuthState();

  return (
    <div className="app">
      {
        !username? (
          <Login />
        ) : (
          <Message />
        )
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
}

export default App;