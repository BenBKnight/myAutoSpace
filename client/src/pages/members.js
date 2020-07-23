import React from "react";

function Members() {
    return (
        <div>
            <div class="container-center-col">


                <div class="tile box mt-5 has-text-centered container-center vehicle-style">
                    <h2 class="title">Welcome <span class="title member-name"></span>!</h2>
                </div>

                <div class="tile box has-text-centered container-center vehicle-style">
                    <div class="is-child">
                        <h2 class="subtitle label">Your Vehicles:</h2>
                        <div class="section loginInput" id="vehicleDisplay">
                        </div>
                        <button id="vehicleButton" class="button is-link">Add New Vehicle!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;