import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import MissionList from "./MissionList";


function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<MissionList />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/admin" element={<Admin user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;