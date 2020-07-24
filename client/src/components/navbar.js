import React from "react";
import $ from "jquery";

function Navbar() {
    return (
        <nav className="navbar " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/members">
                    <img src="images/logo.png" width="40" height="28" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item nav-hide" href="/members">Home</a>
                    <a className="navbar-item nav-hide" href="/vehicles">Add Vehicles</a>
                    <a className="navbar-item nav-hide" href="/newMaintenance">Add Maintenance</a>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item logoutHide logoutBtn">Logout</a>
                    <a className="navbar-item signup-hide">Signup</a>
                    <a className="navbar-item login-hide">Login</a>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;


