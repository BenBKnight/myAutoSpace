import React, { useState, useMemo, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import { UserContext } from "./utils/userContext";
import { VehicleContext } from "./utils/vehicleContext";
import ProtectedRoute from "../src/utils/protectedRoute";
function App() {
  // To hide navBar buttons, whether or not the user is signed in or not
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const { id } = useContext(UserContext);

  const loggedInValue = useMemo(() => ({ userLoggedIn, setUserLoggedIn }), [userLoggedIn, setUserLoggedIn])
  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <UserContext.Provider value={loggedInValue}>
            <Navbar />
            <Switch>
              <VehicleContext.Provider>
                <Route exact path="/" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/MaintRecord" component={MaintRecord} />
                <Route exact path="/Members" component={Members} value={id} />
                <Route exact path="/Maintenance" component={Maintenance} />
                <Route exact path="/Vehicles" component={Vehicles} />
                <Route exact path="/NewMaintenance" component={NewMaintenance} />
                <Route exact path="/Vehicles/5" component={VehicleDisplay} />
              </VehicleContext.Provider>
            </Switch>
          </UserContext.Provider>
        </header>
      </div >
    </Router>
  );
}

export default App;
