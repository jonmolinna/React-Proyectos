import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRouter from './routers/AppRouter';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Router>
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