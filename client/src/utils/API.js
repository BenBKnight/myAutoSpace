import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";
// import jwt from "jsonwebtoken";


const serverUrl = "http://localhost:8080";

// const sampleData =
//     [{
//         UserId: 2,
//         accidents: 5,
//         condition: "Excellent",
//         createdAt: "2020-07-26T23:05:51.000Z",
//         id: 5,
//         locationLastOwned: "c",
//         make: "a",
//         mileage: 3,
//         model: "b",
//         numOfOwners: 6,
//         type: "Car",
//         updatedAt: "2020-07-26T23:05:51.000Z",
//         vin: 2,
//         year: 1,
//         yearPurchased: 4
//     }, {
//         UserId: 2,
//         accidents: 6,
//         condition: "Excellent",
//         createdAt: "2020-07-26T23:06:14.000Z",
//         id: 6,
//         locationLastOwned: "e",
//         make: "q",
//         mileage: 8,
//         model: "w",
//         numOfOwners: 5,
//         type: "Truck",
//         updatedAt: "2020-07-26T23:06:14.000Z",
//         vin: 9,
//         year: 0,
//         yearPurchased: 7
//     }, {
//         UserId: 2,
//         accidents: 66666,
//         condition: "Fair",
//         createdAt: "2020-07-26T23:06:42.000Z",
//         id: 7,
//         locationLastOwned: "i",
//         make: "p",
//         mileage: 666,
//         model: "o",
//         numOfOwners: 666666,
//         type: "Motorcycle",
//         updatedAt: "2020-07-26T23:06:42.000Z",
//         vin: 66,
//         year: 6,
//         yearPurchased: 6666
//     }]

export default {

    // Post Routes
    loginUser: function (user) {
        return axios.post(serverUrl + "/api/login", user)
            .then(res => {
                console.log("++=+++===+++======++===", res)
                const token = res.data.token;
                localStorage.setItem("jwt.Token", token);
                setAuthorizationToken(token);
            })
    },
    signUp: function (data) {
        return axios.post(serverUrl + "/api/signup", data)
            .then(res => {
                console.log("++=+++===+++======++===", res)
                const token = res.data.token;
                localStorage.setItem("jwt.Token", token);
                setAuthorizationToken(token);
            })
    },
    newVehicle: function (data) {
        console.log("*******************", localStorage.getItem("jwt.Token"), data)
        return axios.post(serverUrl + "/api/postVehicle", data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    },
    maintRecord: function (data) {
        return axios.post(serverUrl + "/api/maintenance", data)
    },

    // Get Routes
    allVehicles: function (data) {
        // Data is equal to user Id
        let url = "/vehiclefind/"
        return axios.get(serverUrl + url + data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    },
    userData: function (data) {
        return axios.get(serverUrl + "/api/user")
    },
    vehicleById: function (data) {
        // Data is Equal to Vehicle Id
        return axios.get(serverUrl + "/vehicleid/" + data)
    },
    getMaintRecords: function (data) {
        // Data is Equal to vehicle Id
        return axios.get(serverUrl + "/maintenancefindvehicle/" + data)
    },
    getOneMaintRecord: function (data) {
        return axios.get(serverUrl + "/maintenancefind/" + data)
    }
}


