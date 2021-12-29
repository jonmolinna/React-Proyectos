import React from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="app">
      <Router>
        <AppRouter />
      </Router>
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#d7dbdc',
            color: '#000',
          },
        }}
      />
    </div>
  );
};

export default App;
