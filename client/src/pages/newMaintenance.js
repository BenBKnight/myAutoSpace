import React from "react";
import $ from "jquery";

function NewMaintenance() {
    async function listVehicleNames() {
        //Getting all vehicles
        const userId = await $.ajax({
            url: "/api/user_data",
            type: "GET"
        });
        // console.log(userId);
        const result = await $.ajax({
            url: `/vehiclefind/${userId.id}`,
            type: "GET"
        });
        //Appending vehicle info to the dropdown menu
        result.forEach(vehicle => {
            $("#vehicle").append(
                `<option value=${vehicle.id}>${vehicle.make} ${vehicle.model}: Vin-${vehicle.vin}</option>`
            );
        });
    }

    $(document).ready(() => {
        const loginHide = $(".login-hide");
        const signupHide = $(".signup-hide");

        signupHide.hide();
        loginHide.hide();
        listVehicleNames();


        $("#submit").click(async (event) => {
            try {
                event.preventDefault();
                // Gathering information from the form
                const maint = {
                    name: $("#jobName")
                        .val()
                        .trim(),
                    description: $("#jobDescription")
                        .val()
                        .trim(),
                    milage: parseInt(
                        $("#milage")
                            .val()
                            .trim()
                    ),
                    parts: $("#parts")
                        .val()
                        .trim(),
                    VehicleId: $("#vehicle").val(),
                    jobDate: `${$("#date-month").val()}-${$("#date-day").val()}-${$("#date-year").val()}`
                };

                // Sending information to the database
                await $.ajax({
                    url: "/api/maintenance",
                    type: "POST",
                    data: maint
                });

                // Re-directing user back to the maintenance page for the car
                // location.pathname = `/vehicles/${$("#vehicle").val()}`;
            } catch (error) {
                if (error) {
                    throw error;
                }
            }
        });
    }); //end doc ready
    const logoutBtn = $(".logoutBtn");
    logoutBtn.on("click", event => {
        event.preventDefault();
        window.location.replace("/logout");
    });
    return (
        <div className="section columns">
            <div className="tile container-center">
                <div className="column container-background container-select ml-3 mt-1">
                    <div className="columns container-center mt-5">
                        <h3 className="is-size-3 has-text-black">Maintenance For</h3>
                    </div>
                    <div className="columns container-center">
                        <div className="select">
                            <select id="vehicle">
                                <option value="null">Select Vehicle</option>
                            </select>
                        </div>
                    </div>

                    <div className="columns container-center container-wrench">
                        <img src="images/wrenches.png" alt="wrenches" className="img-wrench" />
                    </div>
                </div>
            </div>

            <div className="tile">
                <form className="column container-background ml-3 mt-1">
                    <div>
                        <div className="form-group">
                            <label className="has-text-black" for="jobName">Job Name:</label>
                            <textarea className="input form-control" id="jobName" rows="1" placeholder="eg. Replaced Break Pads"></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className="has-text-black" for="jobDescription">Job Description:</label>
                            <textarea className="textarea form-control" id="jobDescription" rows="4"></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className="has-text-black" for="milage">Milage:</label>
                            <textarea className="input form-control" id="milage" rows="1"></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label className="has-text-black" for="parts">Parts:</label>
                            <textarea className="input form-control" id="parts" rows="1"></textarea>
                        </div>
                    </div>
                    <label className="has-text-bla" for="date">Date of Service:</label>
                    <div className="form-group form-date">
                        <div className="select">
                            <select id="date-month">
                                <option value="null">Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="select">
                            <select className="m-0" id="date-day">
                                <option value="null">Select Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </div>
                        <div className="select">
                            <select id="date-year">
                                <option value="null">Select Year</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="container-center mt-4">
                        <button type="submit" className="button btn btn-primary has-background-info-dark has-text-info-light" id="submit">Add Maintenance</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewMaintenance;