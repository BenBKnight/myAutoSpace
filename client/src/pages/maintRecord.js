import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/card/card";
import Header from "../components/header/header";
import InformationDisplay from "../components/informationDisplay/informationDisplay";

class MaintRecord extends Component {
    state = {
        data: [],
        id: 7
    };
    componentDidMount() {
        API.getOneMaintRecord(this.state.id)
            .then((res) => {
                this.setState({
                    data: res.data[0]
                })
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        return (
            <div>
                <br />
                <Card>
                    <Header
                        value={"Maintenance Record"} />
                </Card>
                <br />
                <Card>
                    <form id="maint-form">
                        <InformationDisplay label="Job: " value={this.state.data.name} />
                        <br />
                        <InformationDisplay label="Job Date: " value={this.state.data.jobDate} />
                        <br />
                        <InformationDisplay label="Mileage: " value={this.state.data.milage} />
                        <br />
                        <InformationDisplay label="Description: " value={this.state.data.description} />
                        <br />
                        <InformationDisplay label="Parts: " value={this.state.data.parts} />
                        <br />
                    </form>
                </Card>

            </div>
        );
    }
}
export default MaintRecord;