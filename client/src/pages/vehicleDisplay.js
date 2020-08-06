import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Card from "../components/card/card";
import InformationDisplay from "../components/informationDisplay/informationDisplay";
import Ancestor from "../components/ancestor/ancestor";
import TableMaint from "../components/tableMaint/tableMaint";
import Subtitle from "../components/subtitle/subtitle";
import API from "../utils/API";
import TableMd from "../components/tableMd/tableMd";
import TestMdData from "../db/testData";
import { AuthContext } from "../utils/authContext";

class VehicleDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicleID: "",
            vehicle: {},
            conditionDescription: "",
            maintRecords: [],
            maintRecordsTable: {}
        };
    };
    static contextType = AuthContext;

    componentDidMount() {
        let location = this.props.match.params.id;
        console.log(this.context.userId)
        this.setState({
            vehicleID: location
        }, () => {
            this.apiCall()
        })
    };
    apiCall = () => {
        API.vehicleById(this.state.vehicleID)
            .then((res) => {
                this.setState({
                    vehicle: res.data[0]
                })
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                this.setCondition();
                this.maintRecords();
            })
    }
    setCondition() {
        switch (this.state.vehicle.condition) {
            case "Excellent":
                this.setState({
                    conditionDescription: "Looks new and is in excellent mechanical condition!"
                });
                break;
            case "Fair":
                this.setState({
                    conditionDescription: "Has some repairable cosmetic defects and is free of major mechanical problems."
                });
                break;
            case "Poor":
                this.setState({
                    conditionDescription: "Has some cosmetic defects that require repairing and/or mechanical problems."
                });
                break;
            default: this.setState({
                condition: "No Description Available"
            })
        }
    };

    maintRecords() {
        API.getMaintRecords(this.state.vehicleID)
            .then((res) => {
                this.setState({
                    maintRecords: res.data
                })
            })

            .catch(err => {
                console.log(err)
            })

    };

    render() {
        let maintRecordHeaders = ["Job", "Mileage", "Date", "Link"];
        let carMdHeaders = ["Description", "Mileage", "More Information", "Complete"]

        return (
            <div>
                <br />
                <Ancestor>
                    <div>
                        <Card title={"Picture"}>
                            <br />
                            <figure id="vehiclePic" className="image is-4by3">

                            </figure>
                        </Card>
                        <br />
                        <Card title={"Overview"}>
                            <InformationDisplay className={"subtitle"} label={"Type: "} value={this.state.vehicle.type} />
                            <InformationDisplay className={"subtitle"} label={"Make: "} value={this.state.vehicle.make} />
                            <InformationDisplay className={"subtitle"} label={"Model: "} value={this.state.vehicle.model} />
                            <InformationDisplay className={"subtitle"} label={"Year: "} value={this.state.vehicle.year} />
                            <InformationDisplay className={"subtitle"} label={"Mileage: "} value={this.state.vehicle.mileage} />
                            <InformationDisplay className={"subtitle"} label={"Vin: "} value={this.state.vehicle.vin} />
                        </Card>
                        <br />
                        <Card title={"Title Information"}>
                            <InformationDisplay className={"subtitle Bold"} label={"Owner: "} value={"Placeholder"} />
                            <InformationDisplay className={"subtitle Bold"} label={"Year Purchased: "} value={this.state.vehicle.yearPurchased} />
                        </Card>
                        <br />
                        <Card title={"Quick Links"}>
                            <hr />
                            {/* I don't know how to make quick links using react
                        <Link to="#currentCondition" innerRef={}>Current Condition of Vehicle</Link>
                                <Link to="#historyOfVehicle" >History of Vehicle</Link>
                                <Link to="#MaintenanceRecord" >Maintenance Record</Link>
                                <Link to="#AddNewMaintenance" >Add New Maintenance</Link>
                                <Link to="#CarMD" >CarMD</Link> */}
                            <p className="subtitle"><a href="#currentCondition" title="currentCondition">Current Condition of Vehicle</a></p>
                            <p className="subtitle"><a href="#historyOfVehicle" title="historyOfVehicle">History of Vehicle</a></p>
                            <p className="subtitle"><a href="#MaintenanceRecord" title="MaintenanceRecord">Maintenance Record</a></p>
                            <p className="subtitle"><a href="#AddNewMaintenance" title="AddNewMaintenance">Add New Maintenance</a></p>
                            <p className="subtitle"><a href="#CarMD" title="CarMD">CarMD</a></p>
                        </Card>
                        <br />
                    </div>
                </Ancestor>
                <br />
                <Ancestor>
                    <Card title={"Current Condition"} id="currentCondition">
                        <InformationDisplay className={"subtitle Bold"} label={"Status: "} value={this.state.conditionDescription} />
                    </Card>
                    <br />
                    <Card title={"Vehicle History"} id="historyOfVehicle">
                        <InformationDisplay className={"subtitle Bold"} label={"Number of Accidents: "} value={this.state.vehicle.accidents} />
                        <InformationDisplay className={"subtitle Bold"} label={"Number of Previous Owners: "} value={this.state.vehicle.numOfOwners} />
                        <InformationDisplay className={"subtitle Bold"} label={"Service Hisotry: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle Bold"} label={"Type: "} value={this.state.vehicle.type} />
                        <InformationDisplay className={"subtitle Bold"} label={"Location Last Owned: "} value={this.state.vehicle.locationLastOwned} />
                    </Card>
                </Ancestor>
                <br />
                <Ancestor>
                    <Card title={"Add New Maintenance"} id={"AddNewMaintenance"}>
                        <hr />
                        <InformationDisplay className={"subtitle Bold"} label={"Have you made imporvements to your vehicle?"} />
                        <Link to={location => ({ ...location, pathname: `/NewMaintenance/${this.state.vehicle.id}` })} onClick={() => localStorage.setItem("vehicleId", this.state.vehicle.id)} >Add Maintenance</Link>
                    </Card>
                    <br />
                    <Card title={"Maintenance Record"} id={"MaintenanceRecord"}>
                        <hr />
                        <TableMaint headers={maintRecordHeaders} tableData={this.state.maintRecords} />
                    </Card>
                </Ancestor>
                <br />
                <Ancestor>
                    <Card title={"CarMd"} id="CarMD">
                        <Subtitle className={"subtitle"} value={"Suggested Maintenance"} />
                        <TableMd headers={carMdHeaders} tableData={TestMdData} />
                    </Card>
                </Ancestor>
            </div >

        );
    }
}
export default withRouter(VehicleDisplay);