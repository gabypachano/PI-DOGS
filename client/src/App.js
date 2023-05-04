import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>     
        <Switch >
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/form">
          <Form />
        </Route>     
        <Route path="/">
          <Landing />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
