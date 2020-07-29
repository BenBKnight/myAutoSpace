import React from "react";
import { Link, Route } from "react-router-dom";
import Card from "../components/card";
import InformationDisplay from "../components/informationDisplay";
import Ancestor from "../components/ancestor";
import Table from "../components/table";
import Subtitle from "../components/subtitle";

function VehicleDisplay() {
    let maintRecordHeaders = ["Job", "Mileage", "Date", "Link"];
    let carMdHeaders = ["Description", "Mileage", "More Information", "Complete"]

    // async function getVehicle() {
    //     const url = window.location.href.split("/");
    //     const id = url[url.length - 1];
    //     // console.log(id);
    //     const result = await $.ajax({
    //         url: `/vehicleid/${id}`,
    //         method: "GET"
    //     });
    // }

    // async function getOwner() {
    //     const result = await $.ajax({
    //         url: "/api/user_data",
    //         method: "GET"
    //     });
    //     //console.log(result);
    //     $("#lastName").html(result.lastName);
    //     $("#owner").html(result.firstName);
    // }

    // async function getMaintenance() {
    //     const url = window.location.href.split("/");
    //     const vehicleId = url[url.length - 1];
    //     const result = await $.ajax({
    //         url: `/maintenancefindvehicle/${vehicleId}`,
    //         method: "GET"
    //     });
    //     // get total number of Maintenance
    //     const total = result.length.toString();
    //     // console.log(total);
    //     $("#totalMaintenance").html(total);

    //     // Loop through Maintenance and append to table
    //     let num = 0;
    //     result.forEach(job => {
    //         const table = document.getElementById("tableBody");
    //         const row = table.insertRow(num);
    //         const cell1 = row.insertCell(0);
    //         const cell2 = row.insertCell(1);
    //         const cell3 = row.insertCell(2);
    //         const cell4 = row.insertCell(3);
    //         cell1.innerHTML = job.name;
    //         cell2.innerHTML = job.milage;
    //         cell3.innerHTML = job.jobDate;
    //         cell4.innerHTML = "<a href=" + "/maintenance/" + job.id + ">More info</a>";
    //         num++;
    //     });
    // }

    // async function getCarMD() {
    //     const result = await $.ajax({
    //         url: "/carmd",
    //         method: "GET"
    //     });
    //     // Loop through Maintenance and append to table
    //     let num = 0;
    //     result.data.forEach(job => {
    //         const table = document.getElementById("tableBodyCarMD");
    //         const row = table.insertRow(num);
    //         const cell2 = row.insertCell(0);
    //         const cell3 = row.insertCell(1);
    //         const cell5 = row.insertCell(2);
    //         const cell6 = row.insertCell(3);
    //         cell2.innerHTML = job.desc;
    //         cell3.innerHTML = job.due_mileage;
    //         cell5.innerHTML = "<a href=" + "/maintenance/" + job.id + ">More info</a>";
    //         cell6.innerHTML =
    //             "<label class=" +
    //             "checkbox" +
    //             "><input type=" +
    //             "checkbox" +
    //             "> Completed</label>";
    //         num++;
    //     });
    // }

    // async function setCondition() {
    //     const url = window.location.href.split("/");
    //     const id = url[url.length - 1];
    //     const result = await $.ajax({
    //         url: `/vehicleid/${id}`,
    //         method: "GET"
    //     });
    //     //console.log(result);
    //     switch (result[0].condition) {
    //         case "Excellent":
    //             $("#carCondition").html(
    //                 "Looks new and is in excellent mechanical condition!"
    //             );
    //             break;

    //         case "Fair":
    //             $("#carCondition").html(
    //                 "Has some repairable cosmetic defects and is free of major mechanical problems."
    //             );
    //             break;

    //         case "Poor":
    //             $("#carCondition").html(
    //                 "Has some cosmetic defects that require repairing and/or mechanical problems."
    //             );
    //             break;
    //     }
    // }

    // async function setImage() {
    //     const url = window.location.href.split("/");
    //     const id = url[url.length - 1];
    //     const result = await $.ajax({
    //         url: `/vehicleid/${id}`,
    //         method: "GET"
    //     });
    //     //console.log(result);
    //     switch (result[0].type) {
    //         case "Car":
    //             $("#vehiclePic").append(
    //                 "<img src='./images/car.png' />"
    //             );
    //             break;

    //         case "Motorcycle":
    //             $("#vehiclePic").append(
    //                 "<img src='./images/motorcycle.png' />"
    //             );
    //             break;

    //         case "Truck":
    //             $("#vehiclePic").append(
    //                 "<img src='./images/truck.png' />"
    //             );
    //             break;
    //     }
    // }
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
                        <InformationDisplay className={"subtitle"} label={"Type: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle"} label={"Make: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle"} label={"Model: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle"} label={"Year: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle"} label={"Mileage: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle"} label={"Vin: "} value={"placeholder"} />
                    </Card>
                    <br />
                    <Card title={"Title Information"}>
                        <InformationDisplay className={"subtitle Bold"} label={"Owner: "} value={"placeholder"} />
                        <InformationDisplay className={"subtitle Bold"} label={"Year Purchased: "} value={"placeholder"} />
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
                    <InformationDisplay className={"subtitle Bold"} label={"Status: "} value={"placeholder"} />
                </Card>
                <br />
                <Card title={"Vehicle History"} id="historyOfVehicle">
                    <InformationDisplay className={"subtitle Bold"} label={"Number of Accidents: "} value={"placeholder"} />
                    <InformationDisplay className={"subtitle Bold"} label={"Number of Previous Owners: "} value={"placeholder"} />
                    <InformationDisplay className={"subtitle Bold"} label={"Service Hisotry: "} value={"placeholder"} />
                    <InformationDisplay className={"subtitle Bold"} label={"Type: "} value={"placeholder"} />
                    <InformationDisplay className={"subtitle Bold"} label={"Location Last Owned: "} value={"placeholder"} />
                </Card>
            </Ancestor>
            <br />
            <Ancestor>
                <Card title={"Add New Maintenance"} id={"AddNewMaintenance"}>
                    <hr />
                    <InformationDisplay className={"subtitle Bold"} label={"Have you made imporvements to your vehicle?"} />
                    <button><Link to={location => ({ ...location, pathname: "/NewMaintenance" })} /></button>
                </Card>
                <br />
                <Card title={"Maintenance Record"} id={"MaintenanceRecord"}>
                    <hr />
                    <Table headers={maintRecordHeaders}>

                    </Table>
                </Card>


            </Ancestor>
            <br />
            <Ancestor>
                <Card title={"CarMd"} id="CarMD">
                    <Subtitle className={"subtitle"} value={"Suggested Maintenance"} />
                    <Table headers={carMdHeaders}>

                    </Table>
                </Card>
            </Ancestor>
        </div >
    );
}

export default VehicleDisplay;