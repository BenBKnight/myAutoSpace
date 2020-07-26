import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Members from "./pages/members"
import MaintRecord from "./pages/maintRecord"
import Maintenance from "./pages/maintenance"
import Vehicles from "./pages/vehicles"
import VehicleDisplay from "./pages/vehicleDisplay"
import NewMaintenance from "./pages/newMaintenance"
import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/MainRecord" component={MaintRecord} />
            <Route exact path="/Members" component={Members} />
            <Route exact path="/Maintenance" component={Maintenance} />
            <Route exact path="/Vehicles" component={Vehicles} />
            <Route exact path="/NewMaintenance" component={NewMaintenance} />
            <Route exact path="/VehicleDisplay" component={VehicleDisplay} />
          </Switch>
        </header>
      </div >
    </Router>
  );
}

export default App;
