import React, { Component, useContext } from "react";
import API from "../utils/API";
import Vehicles from "../components/vehicles";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { UserContext } from "../utils/userContext";



class Members extends Component {
    state = {
        userId: 2,
        vehicle: []
    }

    componentDidMount() {
        API.userData()
            .then((res) => {
                console.log(res.data);
                // Need Session to be working, I think
                //     this.setState({
                //         userId: res.data.id
                //     })
                //         .then(() => {
                //             let id = this.state.userId
                //             this.getVehicles(id)
                //         })
            })
            .catch(err => {
                console.log(err)
            })

    }
    getVehicles() {
        API.allVehicles(this.state.userId)
            .then((res) => {
                console.log("api returned for members", res.data);
                this.setState({
                    vehicle: res.data
                }
                )
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <div className="container-center-col">
                    <div className="tile box mt-5 has-text-centered container-center vehicle-style">
                        <h2 className="title">Welcome <span className="title member-name"></span>!</h2>
                    </div>

                    <div className="tile box has-text-centered container-center vehicle-style">
                        <div className="is-child">
                            <h2 className="subtitle label">Your Vehicles:</h2>

                            <div className="section">
                                {this.state.vehicle.map(vehicles => (
                                    <span key={vehicles.id}>
                                        <Vehicles
                                            vehicle={vehicles}
                                        />
                                    </span>
                                ))}

                            </div>
                            <Router>
                                <Link to="/vehicles" />
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Members;