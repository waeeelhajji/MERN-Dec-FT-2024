
import './App.css'
import Home from './Views/Home'
import { Routes, Route } from "react-router-dom"
import OneCake from './Views/OneCake'

function App() {

  return (
    <>
      <h1>the cake is lie 🎂</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cake/:id' element={<OneCake />} />
        <Route />
        <Route />
      </Routes>

    </>
  )
}


export default App
