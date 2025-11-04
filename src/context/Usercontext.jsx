import React from 'react'
import { createContext, useState } from "react";
import { postLogin } from "../services/api";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    //trear data completa (asegurar)
    const login = async (user) => {
        const data = await postLogin(user)
        if (data.success === true) {
            console.log(data.success, data.token)
            localStorage.setItem("token", data.token);
            localStorage.setItem("id", data.id);
            setUser(data.id);
            return true;
        }
        return false;
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token");
    }

    return <UserContext.Provider value={{ user, login, logout, setUser }}>
        {children}
    </UserContext.Provider>
}