import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Login from "./pages/login"
import MainRecord from "./pages/mainRecord"
import Signup from "./pages/signup"
import Maintenance from "./pages/maintenance"
import Members from "./pages/members"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/MainRecord" component={MainRecord} />
            <Route exact path="/Members" component={Members} />
            <Route exact path="/Maintenance" component={Maintenance} />
          </Switch>
        </header>
      </div >
    </Router>
  );
}

export default App;
