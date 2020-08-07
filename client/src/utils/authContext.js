import { createContext } from "react";

export const AuthContext = createContext({
    token: null,
    userId: 1,
    login: (token, userId, tokenExperation) => { },
    logout: () => { }
})