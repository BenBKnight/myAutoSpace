import { createContext } from "react";

export const UserContext = createContext({
    userLoggedIn: false,
    email: "",
    id: ""
});
