import React, { useState } from 'react';
import './App.css';
import Login from './componentes/Login';
import Message from './componentes/Message';

function App() {
  const [username, setUsername] = useState('');

  const handleUser = (name) => {
    setUsername(name);
  }

  const handleLogout = () => {
    setUsername('')
  }

  return (
    <div className="app">
      {
        !username? (
          <Login handleUser={handleUser} />
        ) : (
          <Message 
            handleLogout={handleLogout}
            username={username}
          />
        )
      }
    </div>
  );
}

export default App;