import React, { useState } from 'react';
import './App.css';
import Login from './componentes/Login';
import Message from './componentes/Message';

function App() {
  const [name, setName] = useState('Jon Dalla');

  return (
    <div className="app">
      {
        !name? (
          <Login />
        ) : (
          <Message />
        )
      }
    </div>
  );
}

export default App;