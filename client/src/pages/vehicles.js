import React, { Component, useContext } from "react";
import FormInput from "../components/formInput";
import DropDown from "../components/dropDown";
import FormInputButton from "../components/FormInputButton";
import API from "../utils/API";
import { UserContext } from "../utils/userContext";

class Vehicles extends Component {
    state = {
        type: "",
        make: "",
        model: "",
        year: "",
        vin: "",
        mileage: "",
        yearPurchased: "",
        condition: "",
        accidents: "",
        numOfOwners: "",
        locationLastOwned: "",
        UserId: 2
    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.id;
        this.setState({
            [name]: value
        });
        console.log(this.state)
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    };
    handleSelect = event => {
        let value = event.target.value;
        const name = event.target.id;
        console.log(event, value, name)

        this.setState({
            [name]: value
        });
        console.log(this.state)
        // if (!this.state.email || !this.state.password) {
        //     return;
        // }
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        let vehicleNew = this.state;
        API.newVehicle(vehicleNew)
            .then((res) => {
                console.log("api returned", res);
            })
            .catch(err => {
                console.log(err);
            })
    };
    // componentDidMount() {
    //     function setUserOnLoad() {
    //         const { id, setUserId } = useContext(UserContext);

    //         this.setState({
    //             UserId: id
    //         })
    //     }
    // }
    //     // Gets an optional query string from our url (i.e. ?post_id=23)
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

    render() {
        const conditionOptions = ["Excellent", "Good", "Fair"]
        const makeOptions = ["Car", "Truck", "Motorcycle"];


        return (
            <div className="container-center-col">
                <div className="tile box mt-5 has-text-centered container-center vehicle-style">
                    <p className="title is-1 level-item has-text-centered">Add Your Vehicle!</p>
                </div>
                <div className="tile box section container-center vehicle-style">
                    <form id="vehicleForm ">
                        <DropDown handleSelect={this.handleSelect} id="type" value={this.state.type} options={makeOptions} />

                        <FormInput handleInputChange={this.handleInputChange}
                            id="make" value={this.state.make} placeholder="Make" type="text">Make:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="model" value={this.state.model} placeholder="Model" type="text">Model
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="year" value={this.state.year} placeholder="Year" type="text">Year
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="vin" value={this.state.vin} placeholder="Vin" type="text">Vin:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="mileage" value={this.state.mileage} placeholder="Mileage" type="text">Mileage:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="yearPurchased" value={this.state.yearPurchased} placeholder="Purchased Year" type="text">Purchased Year:
                                    </FormInput>
                        <DropDown handleSelect={this.handleSelect} id="condition" value={this.state.type} options={conditionOptions} />

                        <FormInput handleInputChange={this.handleInputChange}
                            id="accidents" value={this.state.accidents} placeholder="Number of Accidents" type="text">Number of Accidents:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="numOfOwners" value={this.state.numOfOwners} placeholder="Number of Previous Owners" type="text">Number of Previous Owners:
                                    </FormInput>

                        <FormInput handleInputChange={this.handleInputChange}
                            id="locationLastOwned" value={this.state.locationLastOwned} placeholder="Location Last Owned" type="text">Location Last Owned:
                                    </FormInput>
                        <FormInputButton handleFormSubmit={this.handleFormSubmit}>Add Vehicle</FormInputButton>
                    </form>
                </div >
            </div >
        );
    }
}
export default Vehicles;