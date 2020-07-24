import React from "react";
import $ from "jquery";

function Members() {

    let memberId;

    async function getVehicles() {
        //console.log("working");
        const result = await $.ajax({
            url: `/vehiclefind/${memberId}`,
            method: "GET"
        });

        result.forEach(vehicle => {
            const vehicleName = vehicle.type;
            $("#vehicleDisplay").append(
                `<a href="/vehicles/${
                vehicle.id
                }" class="image is-is-5by4 mb-2 container is-clickable"><img id="vehicleButton"  src="images/${vehicleName.toLowerCase()}.png"></a>`
            );
        });
    }

    $(document).ready(() => {
        // This file just does a GET request to figure out which user is logged in
        // and updates the HTML on the page
        const loginHide = $(".login-hide");
        const signupHide = $(".signup-hide");
        $(document).ready(() => {
            signupHide.hide();
        });
        $(document).ready(() => {
            loginHide.hide();
        });
        $.get("/api/user_data").then(data => {
            $(".member-name").text(data.firstName);
            //console.log(data.id);
            memberId = data.id;
            getVehicles();
        });
    });
    //console.log(memberId);

    const logoutBtn = $(".logoutBtn");
    logoutBtn.on("click", event => {
        event.preventDefault();
        window.location.replace("/logout");
    });

    // CLick Listener for vehicle button
    const vehicleBtn = $("#vehicleButton");
    vehicleBtn.on("click", () => {
        // console.log("button clicked");
        window.location.replace("/vehicles");
        // If there's an error, handle it by throwing up a bootstrap alert
        // console.log("changed pages");
    });
    return (
        <div>
            <div className="container-center-col">
                <div className="tile box mt-5 has-text-centered container-center vehicle-style">
                    <h2 className="title">Welcome <span className="title member-name"></span>!</h2>
                </div>
                <div className="tile box has-text-centered container-center vehicle-style">
                    <div className="is-child">
                        <h2 className="subtitle label">Your Vehicles:</h2>
                        <div className="section loginInput" id="vehicleDisplay">
                        </div>
                        <button id="vehicleButton" className="button is-link">Add New Vehicle!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;