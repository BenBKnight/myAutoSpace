import React from "react";

function Maintenance() {

    // $(document).ready(() => {
    //     const jobNames = $("#jobNames");
    //     const loginHide = $(".login-hide");
    //     const signupHide = $(".signup-hide");
    //     $.ajax({
    //         url: "/api/maintenance",
    //         type: "GET"
    //     })
    //         .then(result => {
    //             // nameArray.push(result);

    //             result.forEach(index => {
    //                 jobNames.append(`<li data-jobid= "${index.id}">${index.name}</li>`);
    //             });
    //         })
    //         .catch(err => console.log(err));

    //     $("ul").click(event => {
    //         location.pathname = `/maintenance/${event.target.dataset.jobid}`;
    //     });
    // });
    return (
        <div className="section">
            <div className="container">
                <ul id="jobNames"></ul>
            </div>
        </div>
    );
}

export default Maintenance;