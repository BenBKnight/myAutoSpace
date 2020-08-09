import React, { useContext, useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import jwt from "jsonwebtoken";
import { AuthContext } from "./authContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
    // took out SetUserId : never used
    const [useId] = useContext(AuthContext)
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        let token = localStorage.getItem("jwt.Token");
        if (token) {
            let expirationDate = jwt.decode(token).exp;
            let newDate = new Date();
            if (expirationDate < newDate.getTime() / 1000) {
                setIsAuthenticated(false)
            } if (expirationDate > newDate.getTime() / 1000) {
                setIsAuthenticated(true)
            } else (
                console.log("Could not Authenicate")
            );

        } else {
            setIsAuthenticated(false)
        }

    }, [useId.token])
    if (isAuthenticated === null) {
        return <></>
    }
    return (
        <Route {...rest} render={props =>
            !isAuthenticated ? (
                <Redirect to="/" />
            ) : (
                    <Component {...props} />
                )} />
    )
}