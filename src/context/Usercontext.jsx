import { createContext, useState } from "react";
import { postLogin } from "../services/Api";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = async (user) => {
        const data = await postLogin(user)
        if (data.success === true) {
            localStorage.setItem("token", data.token);
            setUser(data);
            return true;
        }
        return false;
    }

    const logout = () => {
        setUser(null)
    }

    return <UserContext.Provider value={{ user, login, logout, setUser }}>
        {children}
    </UserContext.Provider>
}

