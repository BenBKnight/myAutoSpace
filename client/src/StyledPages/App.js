import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddMaint from './pages/AddMaint';
import AddVehicle from './pages/AddVehicle';
import GarageHome from './pages/GarageHome';
import MaintJob from './pages/MaintJob';
import SignIn from './pages/SignIn';
import VehicleHome from './pages/VehicleHome';



function App () {
  return(
    <Router>
      <Switch>
        <Route exact path='/garage' component={GarageHome}/>
        <Route exact path='/add-vehicle' component={AddVehicle}/>
        <Route exact path='/add-maintenance' component={AddMaint}/>
        <Route exact path='/job' component={MaintJob}/>
        <Route exact path='/vehicle' component={VehicleHome}/>
        <Route exact path='/' component={SignIn}/>
      </Switch>
    </Router>
  )
}

export default App;
