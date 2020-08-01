import React, { Component } from 'react';
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
import { AuthContext } from "./utils/authContext";

class App extends Component {
  // To hide navBar buttons, whether or not the user is signed in or not
  // const [userLoggedIn, setUserLoggedIn] = useState(true);
  // const { id } = useContext(UserContext);

  // const loggedInValue = useMemo(() => ({ userLoggedIn, setUserLoggedIn }), [userLoggedIn, setUserLoggedIn])
  state = {
    token: null,
    userId: null,
  }
  login = (token, userId, tokenExperation) => {
    this.setState({
      token: token,
      userId: userId
    })
  }
  logout = () => {
    this.setState({
      token: null,
      userId: null
    })
  }
  render() {
    return (

      <Router>
        <AuthContext.Provider value={{
          token: this.state.token,
          userId: this.state.userId,
          login: this.login,
          logout: this.logout
        }}>
          <div className="App">
            <header className="App-header">
              <UserContext.Provider >
                <Navbar />
                <Switch>
                  <VehicleContext.Provider>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route path="/MaintRecord/:id" component={MaintRecord} />
                    <Route exact path="/Members" component={Members} />
                    <Route exact path="/Maintenance" component={Maintenance} />
                    <Route exact path="/Vehicles" component={Vehicles} />
                    <Route exact path="/NewMaintenance" component={NewMaintenance} />
                    <Route path="/Vehicles/:id" component={VehicleDisplay} />
                  </VehicleContext.Provider>
                </Switch>
              </UserContext.Provider>
            </header>
          </div >
        </AuthContext.Provider>
      </Router>
    );
  }
}

export default App;
