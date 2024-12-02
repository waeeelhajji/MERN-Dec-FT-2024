import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  //!               function to change state
  //!      state var      |
  //!         V           V
  const [superHeroes, setSuperHeroes] = useState([])


  const FetchData = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        return response.json()
      })
      .then((JasonRes) => {
        console.log(JasonRes)
        setSuperHeroes(JasonRes)
      }
      )
      .catch((err) => {
        console.log(err)
      })
  }

  const AxiosDATA = () => {

    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      // ! AXIOS wraps the response inside the .data key
      .then((res) => {
        console.log(res.data)
        setSuperHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }
  // ! useEffect will only trigger AFTER the component as FINISHED rendering
  // FetchData()
  useEffect(() => {
    // AxiosDATA()
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      // ! AXIOS wraps the response inside the .data key
      .then((res) => {
        console.log(res.data)
        setSuperHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <>
      <h3>SuperHeroes 🦸🦸‍♂️</h3>
      <button onClick={FetchData}>FetchHeroes</button>
      <button onClick={AxiosDATA}>AxiosHeroes</button>
      <br />
      {/* {JSON.stringify(superHeroes)} */}

      <table>
        <thead>
          <tr>
            <th>Images</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            superHeroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>

                </tr>
              )
            })
          }
        </tbody>







      </table>



    </>
  )
}

export default App
