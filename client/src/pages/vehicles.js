import React from "react";

function Vehicles() {
    // $(document).ready(() => {
    //     const loginHide = $(".login-hide");
    //     const signupHide = $(".signup-hide");
    //     $(document).ready(() => {
    //         signupHide.hide();
    //     });
    //     $(document).ready(() => {
    //         loginHide.hide();
    //     });
    //     // Gets an optional query string from our url (i.e. ?post_id=23)
    //     // const url = window.location.search;
    //     let vehicleId;
    //     // Sets a flag for whether or not we're updating a vehicle to be false initially
    //     const updating = false;

    //     // blogContainer holds all of our posts
    //     const vehicleContainer = $("#vehicleContainer");
    //     const postCategorySelect = $("#category");
    //     // Click events for the edit and delete buttons
    //     $(document).on("click", "button.delete", handleVehicleDelete);
    //     $(document).on("click", "button.edit", handleVehicleEdit);
    //     postCategorySelect.on("change", handleTypeChange);
    //     let vehicles;

    //     // Getting jQuery references
    //     const makeInput = $("#make");
    //     const modelInput = $("#model");
    //     const yearInput = $("#year");
    //     const vinInput = $("#vin");
    //     const mileageInput = $("#mileage");
    //     const vehicleForm = $("#buttonADD");
    //     const type = $("#type");
    //     const yearPurchased = $("#yearPurchased");
    //     const condition = $("#condition");
    //     const accidents = $("#accidents");
    //     const numOfOwners = $("#numOfOwners");
    //     const locationLastOwned = $("#locationLastOwned");

    //     // Adding an event listener for when the form is submitted
    //     $(vehicleForm).on("click", event => {
    //         event.preventDefault();
    //         // Wont submit the vehicle if we are missing a body or a title
    //         if (!modelInput.val().trim() || !makeInput.val().trim()) {
    //             return;
    //         }
    //         // Constructing a newPost object to hand to the database
    //         const newVehicle = {
    //             type: type.val(),
    //             make: makeInput.val().trim(),
    //             model: modelInput.val().trim(),
    //             year: yearInput.val().trim(),
    //             vin: vinInput.val().trim(),
    //             mileage: mileageInput.val().trim(),
    //             yearPurchased: yearPurchased.val().trim(),
    //             condition: condition.val().trim(),
    //             accidents: accidents.val().trim(),
    //             numOfOwners: numOfOwners.val().trim(),
    //             locationLastOwned: locationLastOwned.val().trim()
    //         };

    //         // If we're updating a vehicle run updatePost to update a vehicle
    //         // Otherwise run submitPost to create a whole new vehicle
    //         if (updating) {
    //             newVehicle.id = vehicleId;
    //             updateVehicle(newVehicle);
    //         } else {
    //             submitVehicle(newVehicle);
    //         }
    //     });

    //     // This function grabs posts from the database and updates the view
    //     function getVehicles(type) {
    //         let typeString = type || "";
    //         if (typeString) {
    //             typeString = "/type/" + typeString;
    //         }
    //         $.get("/api/allVehicles" + typeString, data => {
    //             // console.log("Vehicles", data);
    //             vehicles = data;
    //             if (!vehicles || !vehicles.length) {
    //                 displayEmpty();
    //             } else {
    //                 initializeRows();
    //             }
    //         });
    //     }

    //     // This function does an API call to delete posts
    //     function deleteVehicle(id) {
    //         $.ajax({
    //             method: "DELETE",
    //             url: "/api/vehicles/" + id
    //         }).then(() => {
    //             getVehicles(postCategorySelect.val());
    //         });
    //     }

    //     // Getting the initial list of vehicles
    //     getVehicles();
    //     // InitializeRows handles appending all of our constructed vehicle HTML inside
    //     // blogContainer
    //     function initializeRows() {
    //         vehicleContainer.empty();
    //         const vehiclesToAdd = [];
    //         for (let i = 0; i < vehicles.length; i++) {
    //             vehiclesToAdd.push(createNewRow(vehicles[i]));
    //         }
    //         vehicleContainer.append(vehiclesToAdd);
    //     }

    //     // This function constructs a vehicle's HTML
    //     function createNewRow(vehicle) {
    //         const newVehicleCard = $("<div>");
    //         newVehicleCard.addClass("card");
    //         const newVehicleCardHeading = $("<div>");
    //         newVehicleCardHeading.addClass("card-header");
    //         const deleteBtn = $("<button>");
    //         deleteBtn.css({
    //             float: "right",
    //             "font-weight": "700",
    //             "margin-top": "-15px"
    //         });
    //         deleteBtn.text("x");
    //         deleteBtn.addClass("delete btn btn-danger");
    //         const editBtn = $("<button>");
    //         editBtn.text("EDIT");
    //         editBtn.addClass("edit btn btn-default");
    //         const newPostType = $("<h2>");

    //         const newPostCategory = $("<h5>");
    //         newPostCategory.text(vehicle.type);
    //         newPostCategory.css({
    //             float: "right",
    //             "font-weight": "700",
    //             "margin-top": "-15px"
    //         });
    //         const newVehicleCardBody = $("<div>");
    //         newVehicleCardBody.addClass("card-body");
    //         const newVehicleBody = $("<p>");
    //         newPostType.text(vehicle.make + " ");
    //         newVehicleBody.text(vehicle.model);

    //         newVehicleCardHeading.append(newPostType);
    //         //newVehicleCardHeading.append(newPostCategory);
    //         newVehicleCardHeading.append(newVehicleBody);
    //         newVehicleCardBody.append(deleteBtn);
    //         //newVehicleCardHeading.append(editBtn);
    //         newVehicleCard.append(newVehicleCardHeading);
    //         newVehicleCard.append(newVehicleCardBody);
    //         newVehicleCard.data("vehicle", vehicle);
    //         return newVehicleCard;
    //     }

    //     // This function figures out which vehicle we want to delete and then calls
    //     // deletePost
    //     function handleVehicleDelete() {
    //         const currentPost = $(this)
    //             .parent()
    //             .parent()
    //             .data("vehicle");
    //         deleteVehicle(currentPost.id);
    //     }

    //     // This function figures out which vehicle we want to edit and takes it to the
    //     // Appropriate url
    //     function handleVehicleEdit() {
    //         const currentPost = $(this)
    //             .parent()
    //             .parent()
    //             .data("vehicle");
    //         window.location.href = "/vehicles?vehicle_id=" + currentPost.id;
    //     }

    //     // This function handles reloading new posts when the category changes
    //     function handleTypeChange() {
    //         const newVehicleType = $(this).val();
    //         getVehicles(newVehicleType);
    //     }

    //     // This function displays a message when there are no posts
    //     function displayEmpty() {
    //         vehicleContainer.empty();
    //         const messageH2 = $("<h2>");
    //         messageH2.css({ "text-align": "center", "margin-top": "50px" });
    //         messageH2.html("No vehicles yet for this type!");
    //         vehicleContainer.append(messageH2);
    //     }

    //     // Submits a new vehicle and brings user to blog page upon completion
    //     function submitVehicle(vehicle) {
    //         $.post("/api/postVehicle", vehicle, () => {
    //             window.location.href = "/vehicles";
    //         }).then(() => {
    //             window.location.href = "/members";
    //         });
    //     }

    //     // Update a given vehicle, bring user to the blog page when done
    //     function updateVehicle(vehicle) {
    //         $.ajax({
    //             method: "PUT",
    //             url: "/api/vehicles",
    //             data: vehicle
    //         }).then(() => {
    //             // window.location.href = "/vehicles";
    //         });
    //     }
    // });
    return (
        <div className="container-center-col">
            <div className="tile box mt-5 has-text-centered container-center vehicle-style">
                <p className="title is-1 level-item has-text-centered">Add Your Vehicle!</p>
            </div>
            <div className="tile box section container-center vehicle-style">
                <form id="vehicleForm ">
                    <p className="is-5">Type of Vehicle:</p>
                    <div className="form-group">
                        <div className="container">
                            <div className="select">
                                <select id="type">
                                    <option value="Car">Car</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                </select>
                            </div>
                        </div>
                        <div className="container">
                            <label for="Make">Make:</label>
                            <input type="text" className="input form-control" id="make">
                            </input>
                            <br />
                            <div>
                                <div className="container">
                                    <label for="Model">Model:</label>
                                    <input className="input form-control" rows="1" id="model"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="Year">Year:</label>
                                    <input className="input form-control" rows="1" id="year"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="VIN">VIN:</label>
                                    <input className="input form-control" rows="1" id="vin"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="Mileage">Mileage:</label>
                                    <input className="input form-control" rows="1" id="mileage"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="yearPurchased">Purchased Year:</label>
                                    <input className="input form-control" rows="1" id="yearPurchased"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="yearPurchased">Vehicle Condition:</label>
                                    <br />
                                    <div className="select">
                                        <select id="condition">
                                            <option value="Excellent">Excellent</option>
                                            <option value="Fair">Fair</option>
                                            <option value="Poor">Poor</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="container">
                                    <label for="accidents">Number of Accidents:</label>
                                    <input className="input form-control" rows="1" id="accidents"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="numOfOwners">Number of Previous Owners:</label>
                                    <input className="input form-control" rows="1" id="numOfOwners"></input>
                                    <br />
                                </div>
                                <div className="container">
                                    <label for="yearPurchased">Location Last Owned:</label>
                                    <input className="input form-control" rows="1" id="locationLastOwned"></input>
                                    <br />
                                </div>
                                <button type="submit" id="buttonADD" className="button btn btn-success submit btn-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Vehicles;