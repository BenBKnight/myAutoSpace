import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";
import jwt from "jsonwebtoken";


const serverUrl = "http://localhost:8080";



export default {

    // Post Routes
    loginUser: function (user) {
        return axios.post(serverUrl + "/api/login", user)
            .then(res => {
                // console.log("++=+++===+++======++===", res)
                const token = res.data.token;
                localStorage.setItem("jwt.Token", token);
                const decoded = jwt.decode(token)
                localStorage.setItem("userId", decoded.id)
                setAuthorizationToken(token);
            })
    },
    signUp: function (data) {
        return axios.post(serverUrl + "/api/signup", data)
            .then(res => {
                // console.log("++=+++===+++======++===", res)
                const token = res.data.token;
                localStorage.setItem("jwt.Token", token);
                setAuthorizationToken(token);
            })
    },
    newVehicle: function (data) {
        // console.log("*******************", localStorage.getItem("jwt.Token"), data)
        return axios.post(serverUrl + "/api/postVehicle", data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    },
    maintRecord: function (data) {
        return axios.post(serverUrl + "/api/maintenance", data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    },

    // Get Routes
    allVehicles: function (data) {
        // Data is equal to user Id
        console.log(localStorage.getItem("jwt.Token"))
        return axios.get(serverUrl + "/vehiclefind/" + data, {
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
        return axios.get(serverUrl + "/vehicleid/" + data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    },
    getMaintRecords: function (data) {
        // Data is Equal to vehicle Id
        return axios.get(serverUrl + "/maintenancefindvehicle/" + data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    },
    getOneMaintRecord: function (data) {
        return axios.get(serverUrl + "/maintenancefind/" + data, {
            headers: {
                Authorization: localStorage.getItem("jwt.Token")
            }
        })
    }
}


