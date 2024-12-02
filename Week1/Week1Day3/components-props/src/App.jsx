import './App.css'
import ClorComp from './components/ClorComp'
import Events from './components/Events'
import Header from './components/Header'


function App() {

  const x = 5
  const Hello = "React"
  const numbers = [10, 20, 30, 40]

  const obj = {
    name: "bob",
    favFood: "🍝",
    age: 45
  }

  const color = "red"
  const color1 = "green"
  const color2 = "blue"


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>Components-state</h1>
      <Header MyData={obj} hi={Hello} />
      this is
      {x}
      <br />
      {Hello}
      <ul>
        {
          numbers.map((num, indx) => {
            return <li key={indx}>{num}</li>
          })
        }
      </ul>

      {JSON.stringify(obj)}

      <ClorComp color={color} />
      <ClorComp color={color1} />
      <ClorComp color={color2} />
      🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈

      <Events />





    </fieldset>
  )
}

export default App
