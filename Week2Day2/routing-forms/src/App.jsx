import Cool from "./Views/Cool"
import Hero from "./Views/Hero"
import Home from "./Views/Home"
import Navbar from "./components/Navbar"

import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import ErrorHandler from "./Views/ErrorHandler"

function App() {

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>Routing</h1>
      <Navbar />

      {/* <a href="/cool">Go to Cool</a> */}
      {/* Theater stage */}
      <Routes>

        {/* ACT I - HOME */}
        <Route path="/home" element={<Home />} />

        {/* ACT II - COOL page */}
        <Route path="/cool" element={<Cool />} />

        {/* ACT III - hero */}
        {/*localhost:5173/hero/asjkdjkasdjhs */}

        <Route path="/hero/:id" element={<Hero />} />

        {/* ACT IV- wildcard - catch all */}
        <Route path="*" element={<ErrorHandler />} />
      </Routes>
    </fieldset>
  )
}

export default App
