import React, { useState } from 'react'
import Posteos from "./componets/Posteos"
import Estatus from "./componets/Estatus"
import "./index.css"





const App = () => {



  const [TotalLikes, setTotalLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }

  const incrementsLikes = () => {
    setTotalLikes(TotalLikes + 1);

  }

  return (
    <div>
      <nav>
        <Estatus TotalLikes={TotalLikes} />
      </nav>
      <Posteos incrementsLikes={incrementsLikes} />
    </div>
  )
}
export default App

{/**REVIEW => (8.5)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.

  MÁS ATENCIÓN CON LA INDENTACIÓN; ESO AFECTA LA LEGIBILIDAD DEL CÓDIGO.
*/}