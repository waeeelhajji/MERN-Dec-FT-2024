
import './App.css'
import Home from './Views/Home'
import { Routes, Route } from "react-router-dom"
import OneCake from './Views/OneCake'
import Form from './Views/Form'
import Navbar from './components/Navbar'
import Update from './Views/Update'

function App() {

  return (
    <>
      <h1>the cake is lie 🎂</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cake/:id' element={<OneCake />} />
        <Route path='/create' element={<Form />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>

    </>
  )
}


export default App
