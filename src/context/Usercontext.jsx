import React, { useEffect } from 'react'
import { createContext, useState } from "react";
import { postLogin } from "../services/api";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [userLog, setUserLog] = useState(null)

     useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUserLog(parsedUser);
      } catch (err) {
        console.error("Error parsing user data:", err);
        localStorage.removeItem("user");
      }
    }
  }, []);

    const login = async (user) => {
        const data = await postLogin(user)
        if (data.success === true) {
            console.log(data.success, data.token)
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("id", data.user.id);
            setUserLog(data.user);
            return true;
        }
        return false;
    }

    const logout = () => {
        setUserLog(null)
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    return (<UserContext.Provider value={{ userLog, login, logout, setUserLog }}>
        {children}
    </UserContext.Provider>);
}