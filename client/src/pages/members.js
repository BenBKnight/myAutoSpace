import React, { Component } from "react";
import API from "../utils/API";
import Vehicles from "../components/vehicles/vehicles";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Subtitle from "../components/subtitle/subtitle";


class Members extends Component {
    state = {
        userId: 40,
        // localStorage.getItem("userId"),
        vehicle: []
    }

    componentDidMount() {
        console.log("state:", this.state)
        API.allVehicles(this.state.userId)
            .then(res => {
                console.log("api returned for members", res);
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
                <br />
                <Card>
                    <Header
                        className={"tile box mt-5 has-text-centered container-center vehicle-style"}
                        value={"Welcome"} />
                </Card>
                <br />
                <Card>
                    <Subtitle className={"subtitle label"} value={"Your Vehicles"} />
                    <div className="section">
                        {this.state.vehicle.map(vehicles => (
                            <span key={vehicles.id}>
                                <Vehicles
                                    vehicle={vehicles}
                                />
                            </span>
                        ))}
                    </div>
                </Card>
            </div>
        );
    }
}
export default Members;