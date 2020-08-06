import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import Signup from "./pages/signup";
import Members from "./pages/members";
import MaintRecord from "./pages/maintRecord";
import Maintenance from "./pages/maintenance";
import Vehicles from "./pages/vehicles";
import VehicleDisplay from "./pages/vehicleDisplay";
import NewMaintenance from "./pages/newMaintenance";
import Navbar from "./components/navbar/navbar";
import { AuthProvider, AuthContext } from "./utils/authContext";
import { useContext } from 'react';

export default function App() {

  // const [userId, setUserId] = useContext(AuthContext)

  return (
    <Router>
      <AuthProvider >
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              {/* {userId ? <Route path="/MaintRecord/:id" component={MaintRecord} /> : <Redirect to="/" />} */}
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
  );
}

