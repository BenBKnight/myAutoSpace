import React, { Component } from "react";
import FormInput from "../components/formInput/formInput";
import DropDown from "../components/dropDown/dropDown";
import FormInputButton from "../components/formInputButton/FormInputButton";
import API from "../utils/API";
import Card from "../components/card/card";
import { AuthContext } from "../utils/authContext";

class Vehicles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "car",
            make: "",
            model: "",
            year: "",
            vin: "",
            mileage: "",
            yearPurchased: "",
            condition: "Excellent",
            accidents: "",
            numOfOwners: "",
            locationLastOwned: "",
            UserId: localStorage.getItem("userId")
        };
    }
    static contextType = AuthContext;

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.id;
        this.setState({
            [name]: value
        });
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    };
    handleSelect = event => {
        let value = event.target.value;
        const name = event.target.id;
        this.setState({
            [name]: value
        });
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        let vehicleNew = this.state;
        API.newVehicle(vehicleNew)
            .then((res) => {
                console.log("api returned", res);
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        const conditionOptions = ["Excellent", "Good", "Fair"]
        const makeOptions = ["Car", "Truck", "Motorcycle"];


        return (
            <div className="container-center-col">
                <br />
                <Card title={"Add Your Vehicle"}>
                </Card>
                <br />
                <Card>
                    <form id="vehicleForm ">
                        <DropDown handleSelect={this.handleSelect} title={"Vehicle Type:"} id="type" value={this.state.type} options={makeOptions} />

                        <FormInput handleInputChange={this.handleInputChange}
                            id="make" value={this.state.make} placeholder="Make" type="text">Make:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="model" value={this.state.model} placeholder="Model" type="text">Model
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="year" value={this.state.year} placeholder="Year" type="text">Year
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="vin" value={this.state.vin} placeholder="Vin" type="text">Vin:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="mileage" value={this.state.mileage} placeholder="Mileage" type="text">Mileage:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="yearPurchased" value={this.state.yearPurchased} placeholder="Purchased Year" type="text">Purchased Year:
                                    </FormInput>
                        <DropDown handleSelect={this.handleSelect} title={"Vehicle Condition:"} id="condition" value={this.state.type} options={conditionOptions} />

                        <FormInput handleInputChange={this.handleInputChange}
                            id="accidents" value={this.state.accidents} placeholder="Number of Accidents" type="text">Number of Accidents:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="numOfOwners" value={this.state.numOfOwners} placeholder="Number of Previous Owners" type="text">Number of Previous Owners:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="locationLastOwned" value={this.state.locationLastOwned} placeholder="Location Last Owned" type="text">Location Last Owned:
                                    </FormInput>
                        <FormInputButton handleFormSubmit={this.handleFormSubmit}>Add Vehicle</FormInputButton>
                    </form>
                </Card>
            </div>
        );
    }
}
export default Vehicles;