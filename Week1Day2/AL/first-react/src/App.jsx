import { useState } from 'react'
import AnotherComp from './components/AnotherComp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h3>Hello</h3>
      <h1>Hello from App.jsx</h1>
      <AnotherComp />
    </fieldset>
  )
}

export default App
