import Home from "./Home";
import Login from "./Login";
import React, { useState,useContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import MissionList from "./MissionList";
import Register from "./Register";
import Mission from "./Mission";
import Profile from "./Profile";
import { UserContext } from '../context/UserContext'
import AuthRoute from "./AuthRoute";
import Admin from "./Admin";


function App() {
  const { userLog,setUserLog } = useContext(UserContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<MissionList />} />
        <Route path="/mission/:idQuests" element={<Mission />} />
        <Route path="/login" element={<Login userLog={userLog} setUserLogin={setUserLog}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<AuthRoute
          user={userLog}
          defaultComponent={<Profile userLogin={userLog}/>}
          adminComponent={<Admin userLogin={userLog}/>}
        />}/>

      </Routes>
    </>
  )
}

export default App
