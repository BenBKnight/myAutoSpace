import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/authContext";

// import "./style.css";


const Navbar = props => (
    <AuthContext.Consumer>
        {(context) => {
            return (
                <nav className="navbar " role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/members">
                            <img src="images/logo.png" alt="logo" width="40" height="28" />
                        </Link>
                        <button className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBasicExample">
                            {/* <Link aria-hidden="true"></Link>
                            <Link aria-hidden="true"></Link>
                            <Link aria-hidden="true"></Link> */}
                        </button>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/members" className="navbar-item nav-hide" >Home</Link>
                            <Link to="/vehicles" className="navbar-item nav-hide" >Add Vehicles</Link>
                            <Link to="/newMaintenance" className="navbar-item nav-hide" >Add Maintenance</Link>
                        </div>
                        {!context.token && (
                            <div className="navbar-end">
                                <Link to="/signup" className="navbar-item signup-hide">Signup</Link>
                                <Link to="/" className="navbar-item login-hide" >Login</Link>
                            </div>
                        )}
                        {context.token && (
                            <div className="navbar-end">
                                <Link to="/" className="navbar-item logoutHide logoutBtn" >Logout</Link>
                            </div>
                        )}

                    </div>
                </nav>
            )
        }}
    </AuthContext.Consumer>
)

export default Navbar;


