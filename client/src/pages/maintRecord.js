import React, { Component } from "react";
import FormInput from "../components/formInput";
import FormInputButton from "../components/FormInputButton";
import API from "../utils/API";

class MaintRecord extends Component {
    state = {
        name: "",
        description: "",
        milage: "",
        parts: "",
        jobDate: "",
        VehicleId: 11
    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.id;
        console.log(value, name)
        this.setState({
            [name]: value
        });
        console.log(this.state)
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        let maintNew = this.state;
        API.maintRecord(maintNew)
            .then((res) => {
                console.log("api maint returned", res);
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <div>
                <div className="tile box mt-4 ml-4 mr-4 maint-tile is-vertical">
                    <form id="maint-form">

                        <FormInput handleInputChange={this.handleInputChange}
                            id="name" value={this.state.job} placeholder="Job" type="text">Job
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="jobDate" value={this.state.jobDate} placeholder="Job Date" type="text">Job Date
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="milage" value={this.state.milage} placeholder="Vehicle Milage" type="text">Vehicle Milage:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="description" value={this.state.description} placeholder="Description" type="text">Description:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="parts" value={this.state.parts} placeholder="Parts" type="text">Parts:
                                    </FormInput>
                        <FormInputButton handleFormSubmit={this.handleFormSubmit}>Add Maintenance</FormInputButton>
                    </form>
                </div>
            </div>
        );
    }
}
export default MaintRecord;