import Home from "./Home";
import Login from "./Login";
import { useState, React } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import MissionList from "./MissionList";
import Register from "./Register";


function App() {
  const [userLogin, setUserLogin] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<MissionList />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/login" element={<Login userLogin={userLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
