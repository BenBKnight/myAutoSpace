import axios from "axios";

export default {
    loginUser: function (data) {
        return axios.post("/api/login");
    },
    signUp: function (data) {
        return axios.post("/api/signup")
    }
}