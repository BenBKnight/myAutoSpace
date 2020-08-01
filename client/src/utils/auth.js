import Login from "../pages/login";

class Auth {
    constructor() {
        this.authenticated = false
    };
    login(cd) {
        this.authenticated = true;
        cd();
    };
    logout(cd) {
        this.authenticated = false;
        cd();
    };
    isAuthenticated() {
        return this.authenticated
    }
};

Login(cd); {
}
export default new Auth;