import { Route, Routes } from "react-router-dom"
import "../css/App.css"
import Login from "./Login"
import Home from "./Home"
import Nav from "./Nav"
import Register from "./Register"
import { useState } from "react"



function App() {
  const [userLogin,setUserLogin] = useState(null)
  return (
    <>
    <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login userLogin={userLogin}/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </>
  )
}

export default App
