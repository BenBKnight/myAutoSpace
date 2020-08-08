import React, { useState, createContext } from "react";

export const AuthContext = createContext();


export const AuthProvider = props => {
    const [userId, setUserId] = useState({
        id: "",
        firstName: "",
        lastName: "",
        token: "",
        showNotification: true,
        logout: () => {
            localStorage.removeItem("jwt.Token")
        }
    })

    return (
        <AuthContext.Provider value={[userId, setUserId]}>
            {props.children}
        </AuthContext.Provider>
    )
}

