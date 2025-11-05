import Home from "./Home";
import Login from "./Login";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import MissionList from "./MissionList";
import Register from "./Register";
import Mission from "./Mission";


function App() {
  const [userLogin, setUserLogin] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<MissionList />} />
        <Route path="/mission/:idQuests" element={<Mission />} />
        <Route path="/login" element={<Login userLogin={setUserLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
