import React, { useReducer, useEffect } from 'react';
import './App.css';
import Chat from './Componentes/Chat';
import Login from './Componentes/Login';
import Sidebar from './Componentes/Sidebar';
import { TYPES } from './reducers/actions/userActions';
import { userInitialState, userReducer } from './reducers/userReducer';
import axios from './helpers/axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ChatInicio from './Componentes/ChatInicio';
//import Pusher from 'pusher-js';

function App() {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const { user, mensage, grupos } = state;

  const handleLogin = (name) => {
    dispatch({
      type: TYPES.USER_LOGIN,
      payload: name
    })
  };

  useEffect(() => {
    axios.get('/grupo')
    .then(response => {
      dispatch({
        type: TYPES.GET_ALL_GRUPOS,
        payload: response.data,
      })
    })
  }, []);

  useEffect(() => {
    axios.get('/message')
    .then(response => {
      dispatch({
        type: TYPES.GET_ALL_MESSAGE,
        payload: response.data
      })
    })
  }, []);

  const sendMensage = async (mensage, idGrupo) => {
    let options = {
      message: mensage,
      name: user,
      idGrupo: idGrupo,
      timestamp: Date.now(),
    };

    await axios.post('/message/add', options)
      .then(response => {
        dispatch({
          type: TYPES.ADD_MESSAGE,
          payload: response.data
        });
      })
  };

  /*** PUSHER 
  useEffect(() => {
    const pusher = new Pusher('33bd7f1aa81d481acfaf', {
      cluster: 'us2'
    });

    const chanel = pusher.subscribe('messages');
    chanel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));

    });

  }, []); */

  return (
    <div className="app">
      {
        !user? (
          <Login handleLogin={handleLogin} />
        ): (
          <Router>  
            <div className="app__body">
              <aside className="app__sidebar">
                <Sidebar grupos={grupos} mensage={mensage} />
              </aside>

              <aside className="app__chat">
                <Switch>
                  <Route exact path="/grupo/:id">
                    <Chat user={user} messages={mensage} sendMensage={sendMensage} grupos={grupos} />
                  </Route>
                  <Route exact path="/">
                    <ChatInicio user={user} />
                  </Route>
                </Switch>
              </aside>
            </div>
          </Router>
        )
      }
    </div>

  );


}

export default App;


/*
return (
    <div className="app">
      {
        !user? (
          <Login handleLogin={handleLogin} />
        ): (
          <Router>  
           
            <div className="app__body">
            
              <aside className="app__sidebar">
                <Sidebar grupos={grupos} mensage={mensage} />
              </aside>

              <aside className="app__chat">
              <Switch>
                  <Route exact path="/grupo/:id">
                    <Chat user={user} messages={mensage} sendMensage={sendMensage} grupos={grupos} />
                  </Route>
                  <Route exact path="/">
                    <ChatInicio user={user} />
                  </Route>
                </Switch>
              </aside>
              
            </div>
            
          </Router>
        )
      }
    </div>
  );
  */