import React, { Component } from "react";
import API from "../utils/API";
import Vehicles from "../components/vehicles";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Members extends Component {
    state = {
        vehicle: [{
            UserId: 2,
            accidents: 5,
            condition: "Excellent",
            createdAt: "2020-07-26T23:05:51.000Z",
            id: 5,
            locationLastOwned: "c",
            make: "a",
            mileage: 3,
            model: "b",
            numOfOwners: 6,
            type: "Car",
            updatedAt: "2020-07-26T23:05:51.000Z",
            vin: 2,
            year: 1,
            yearPurchased: 4
        }, {
            UserId: 2,
            accidents: 6,
            condition: "Excellent",
            createdAt: "2020-07-26T23:06:14.000Z",
            id: 6,
            locationLastOwned: "e",
            make: "q",
            mileage: 8,
            model: "w",
            numOfOwners: 5,
            type: "Truck",
            updatedAt: "2020-07-26T23:06:14.000Z",
            vin: 9,
            year: 0,
            yearPurchased: 7
        }, {
            UserId: 2,
            accidents: 66666,
            condition: "Fair",
            createdAt: "2020-07-26T23:06:42.000Z",
            id: 7,
            locationLastOwned: "i",
            make: "p",
            mileage: 666,
            model: "o",
            numOfOwners: 666666,
            type: "Motorcycle",
            updatedAt: "2020-07-26T23:06:42.000Z",
            vin: 66,
            year: 6,
            yearPurchased: 6666
        }],
    }
    componentDidMount() {
        console.log(this.state.vehicle)
    }
    // componentDidMount() {
    //     // getVehicles = () => {
    //     API.allVehicles()
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({
    //                 vehicle: res.vehicle
    //             });
    //         });

    // };

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