import axios from "axios";

export default {
    loginUser: function (data) {
        return axios.post("/api/login"); // returns promise for .then syntax
    }
}