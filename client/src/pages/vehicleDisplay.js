import React from "react";

function VehicleDisplay() {


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
            <br />
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <br />
                                <br />
                                <br />
                                <figure id="vehiclePic" className="image is-4by3">
                                </figure>
                            </article>
                        </div>
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child box">
                                <p className="title has-text-centered">Overview</p>
                                <hr />
                                <p className="subtitle"><span className="bold">Type: </span><span id="vehicleType"></span></p>
                                <p className="subtitle"><span className="bold">Make: </span><span id="vehicleMake"></span></p>
                                <p className="subtitle"><span className="bold">Model: </span><span id="vehicleModel"></span></p>
                                <p className="subtitle"><span className="bold">Year: </span><span id="vehicleYear"></span></p>
                                <p className="subtitle"><span className="bold">Mileage: </span><span id="vehicleMileage"></span></p>
                                <p className="subtitle"><span className="bold">Vin: </span><span id="vehicleVin"></span></p>
                            </article>
                            <article className="tile is-child box">
                                <p className="title has-text-centered">Title Information</p>
                                <hr />
                                <p className="subtitle"><span className="bold">Owner: </span><span id="owner"></span><span className="bold"> </span><span id="lastName"></span></p>
                                <p className="subtitle"><span className="bold">Year Purchased: </span><span id="yearPurchased"></span></p>
                                <p className="subtitle"></p>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <div className="content">
                            <p className="title has-text-centered">Quick Links</p>
                            <hr />
                            <p className="subtitle"><a href="#currentCondition" title="currentCondition">Current Condition of Vehicle</a></p>
                            <p className="subtitle"><a href="#historyOfVehicle" title="historyOfVehicle">History of Vehicle</a></p>
                            <p className="subtitle"><a href="#MaintenanceRecord" title="MaintenanceRecord">Maintenance Record</a></p>
                            <p className="subtitle"><a href="#AddNewMaintenance" title="AddNewMaintenance">Add New Maintenance</a></p>
                            <p className="subtitle"><a href="#CarMD" title="CarMD">CarMD</a></p>
                        </div>
                    </article>
                </div>
            </div >

            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p id="currentCondition" className="title has-text-centered">Current Condition</p>
                        <hr />
                        <div className="content">
                            <p className="subtitle"><span className="bold">Status: </span><span id="condition"></span></p>
                            <p className="subtitle"><span id="carCondition"></span></p>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent is-8">
                    <article className="tile is-child box">
                        <p id="historyOfVehicle" className="title has-text-centered">Vehicle History</p>
                        <hr />
                        <div className="content">
                            <p className="subtitle"><span className="bold">Number of Accidents: </span><span id="accidents"></span></p>
                            <p className="subtitle"><span className="bold">Number of Previous Owners: </span><span id="numOfOwners"></span></p>
                            <p><span className="bold">Service History Reports: </span><span id="totalMaintenance"></span></p>
                            <p><span className="bold">Type: Personal Vehicle</span></p>
                            <p className="subtitle"><span className="bold">Location Last Owned: </span><span id="locationLastOwned"></span></p>
                        </div>
                    </article>
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p id="AddNewMaintenance" className="title has-text-centered">Add New Maintenance</p>
                        <hr />
                        <p className="subtitle has-text-centered">Have you made imporvements to your vehicle?</p>
                        <div className="content has-text-centered">
                            <button id="newCarMaintenance" className="button is-info">Add New Maintenance</button>
                        </div>
                    </article>
                </div>
                <div className="tile is-parent is-8">
                    <article className="tile is-child box">
                        <p id="MaintenanceRecord" className="title has-text-centered">Maintenance Record</p>
                        <hr />
                        <div className="content">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Job</th>
                                        <th><abbr title="Mileage">Mileage</abbr></th>
                                        <th><abbr title="Date">Date</abbr></th>
                                        <th>Link to More Information</th>
                                    </tr>
                                    <tbody id="tableBody">

                                    </tbody>
                                </thead>
                            </table>
                        </div >
                    </article >
                </div >
            </div >



            <div className="tile is-parent is-12">
                <article className="tile is-child box">
                    <p id="CarMD" className="title has-text-centered">CarMd</p>
                    <p className="subtitle has-text-centered">Suggested Maintenance</p>
                    <hr />
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th><abbr title="Description">Description</abbr></th>
                                    <th><abbr title="Mileage">Mileage</abbr></th>
                                    <th><abbr title="Info">More Information</abbr></th>
                                    <th><abbr title="Completion">Already Done?</abbr></th>
                                </tr>
                                <tbody id="tableBodyCarMD">
                                </tbody>
                            </thead>
                        </table>
                    </div>
                </article>
            </div >
        </div >
    );
}

export default VehicleDisplay;