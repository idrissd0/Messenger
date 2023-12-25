import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./auth/login";
import Signup from './auth/signup';
import Home from './home';


function App() {

  return (

    <Router>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
       </Switch>
    </Router>
  );

}

export default App;
