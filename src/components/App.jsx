import { Route, Routes } from "react-router-dom"
import "../css/App.css"
import Home from "./Home"
import Header from "./Header"
import Misiones from "./Misiones"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/misiones" element={<Misiones/>} />
      </Routes>
    </>
  )
}

export default App
