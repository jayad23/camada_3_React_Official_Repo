import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './Welcome.css'
//Solo Bienvenida
const Welcome = () => {
  const [welcomeSuggestion, setWelcomeSuggestions] = useState(["pregunta lo que no entiendas", "apoyate de tus compañeros", "realiza todas las actividades de mesa", "agenda asesorías con el asistente, Ivan, ó directamente con el profe, Kike", "estudia mucho", "disfruta cada linea de código mientras aprendes... llorá cuando labures!"])

  return (
    <div className="App">
      <div>
        <a href="https://www.digitalhouse.com/" target="_blank">
          <img src="https://play-lh.googleusercontent.com/xD78B_Wcf9q5iWhKIQS8n1NwdfkVFDJjjUubkcd6rHaiHpOYmFVMoeQ5hbomDGekvhQ" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>¡Bienvenidos a React!</h1>
      <div className="card">
        <p>
          No olvides tener en cuenta las siguientes recomendaciones:
        </p>
        <ul>
          {
            welcomeSuggestion.map((item, index) => (
              <li key={index} style={{ textAlign: "left" }}>{item}</li>
            ))
          }
        </ul>
      </div>
      <p className="read-the-docs">
        Digital House
      </p>
    </div >
  )
}

export default Welcome
