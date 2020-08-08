import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthContext } from "../../utils/authContext";


// import "./style.css";


function Navbar(props) {

    const [userId, setUserId] = useContext(AuthContext)
    const logout = e => {
        setUserId({ id: null })
        console.log(userId.id)
    }


    return (
        <nav className="navbar " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/members">
                    <img src="images/logo.png" alt="logo" width="40" height="28" />
                </Link>
                <button className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                </button>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/members" className="navbar-item nav-hide" >Home</Link>
                    <Link to="/vehicles" className="navbar-item nav-hide" >Add Vehicles</Link>
                    <Link to="/newMaintenance/:id" className="navbar-item nav-hide" >Add Maintenance</Link>
                </div>
                <div className="navbar-end">
                    <button onClick={() => logout()} className="navbar-item logoutHide logoutBtn"  >Logout</button>
                </div>

            </div>
        </nav>
    )

}
export default withRouter(Navbar);


