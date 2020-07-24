import React from "react";
import $ from "jquery";

function MaintRecord() {
    const id = window.location.href.split("/");

    // id[id.length - 1];

    $(document).ready(() => {
        $.ajax({
            url: `/maintenancefind/${id[id.length - 1]}`,
            type: "GET"
        })
            .then(result => {
                // console.log(result[0].name);
                $("#jobName").append(result[0].name);
                $("#jobDate").append(`(${result[0].jobDate})`);
                $("#milage").append(`${result[0].milage}`);
                $("#description").append(`${result[0].description}`);
                $("#parts").append(`${result[0].parts}`);
            })
            .catch(err => console.log(err));
    });
    return (
        <div>
            <div className="tile box mt-4 ml-4 mr-4 maint-tile is-vertical">
                <p className="title has-text-dark is-1" id="jobName">Job: </p>
                <p className="title has-text-dark is-4" id="jobDate">Date of Maintenance: </p>
                <p className="title has-text-dark is-6" id="milage">Vehicle Milage: </p>
                <p className="" id="description">Description: </p>
                <p className="pt-1" id="parts">Parts: </p>
            </div>
        </div>
    );
}

export default MaintRecord;