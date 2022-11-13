import React, { useState } from 'react'
import Posteos from './components/Posteos'
import Estatus from './components/Estatus'
import "./index.css"

const App = () => {

  const [countTotalLikes, setCountTotalLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const incrementsLikes = () => {
    setCountTotalLikes(countTotalLikes + 1);
    console.log(countTotalLikes)
  }

  return (
    <body>
      <nav>
        <Estatus countTotalLikes={countTotalLikes} />
      </nav>
      <Posteos incrementsLikes={incrementsLikes} />
    </body>
  )
}
export default App

{/**REVIEW => (9.0)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}