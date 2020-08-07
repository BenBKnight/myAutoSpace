import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import Members from "./pages/members";
import MaintRecord from "./pages/maintRecord";
import Maintenance from "./pages/maintenance";
import Vehicles from "./pages/vehicles";
import VehicleDisplay from "./pages/vehicleDisplay";
import NewMaintenance from "./pages/newMaintenance";
import { AuthProvider } from "./utils/authContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/MaintRecord/:id" component={MaintRecord} />
              <Route exact path="/Members" component={Members} />
              <Route exact path="/Maintenance" component={Maintenance} />
              <Route exact path="/Vehicles" component={Vehicles} />
              <Route exact path="/NewMaintenance/:id" component={NewMaintenance} />
              <Route path="/Vehicles/:id" component={VehicleDisplay} />
            </Switch>
          </header>
        </div >
      </AuthProvider>
    </Router>
  )
}

