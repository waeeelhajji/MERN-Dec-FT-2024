import { useState } from 'react'
import './App.css'
import Form from "./components/Form"
import Display from "./components/Display"

function App() {

  const [universe, setUniverse] = useState([
    {
      name: "Pluto",
      system: "Solar",
      orbits: 10
    },
    {
      name: "Tatooine",
      system: "Outer Rim",
      orbits: 9001
    }
  ]);
  const addNewUniverse = (objFromForm) => {
    console.log(objFromForm)
    setUniverse([...universe, objFromForm])
  }

  return (
    <fieldset>
      <p>Global State : {JSON.stringify(universe)}</p>
      <Form addNewUniverse={addNewUniverse} />
      <Display universe={universe} />
    </fieldset>
  )
}

export default App
