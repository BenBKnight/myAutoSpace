import React from "react";

function MainRecord() {
    return (
        <div>
            <div class="tile box mt-4 ml-4 mr-4 maint-tile is-vertical">
                <p class="title has-text-dark is-1" id="jobName">Job: </p>
                <p class="title has-text-dark is-4" id="jobDate">Date of Maintenance: </p>
                <p class="title has-text-dark is-6" id="milage">Vehicle Milage: </p>
                <p class="" id="description">Description: </p>
                <p class="pt-1" id="parts">Parts: </p>
            </div>
        </div>
    );
}

export default MainRecord;