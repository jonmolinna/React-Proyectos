import React, { useState } from 'react';
import './App.css';
import Login from './Componentes/Login';
import Message from './Componentes/Message';

function App() {
  const [user, setUser] = useState('');

  const handleLogin = (userName) => {
    setUser(userName);
  };

  return (
    <div className="app">
      {
        user? <Message userName={user} /> : <Login handleLogin={handleLogin} />
      }
    </div>
  );
};

export default App;