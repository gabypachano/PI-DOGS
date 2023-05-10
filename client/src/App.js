import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from './views/Landing/LandingPage';
import Home from './views/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/detail/:id'>
          <Detail />
        </Route>
        <Route path='/form'>
          <Form />



        </Route>     
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
