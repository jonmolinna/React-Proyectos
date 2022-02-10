import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Setting from './pages/Setting';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const user = null;

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {
            user? <Home /> : <Register />
          }
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Setting />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// 1:36:36