
import './App.css'
import Article from './components/Article';

function App() {

  const articles = [
    { title: "cool", size: 22 },
    { title: "Cooler", size: 18 },
    { title: "Super", size: 28 },
    { title: "Sensei", size: 16 },
  ];

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {
        articles.map((elm, indx) => {
          return <Article
            title={elm.title}
            size={elm.size}
            key={indx}
          />
        })
      }


      {/* <Article title={"cool"} size={22} />
      <Article title={"Cooler"} size={18} />
      <Article title={"Super"} size={28} /> */}

    </fieldset>
  )
}

export default App
