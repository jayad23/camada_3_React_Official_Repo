import React, { useState } from 'react'
import Posteos from './components/Posteos'
import Estatus from './components/Estatus'
import { PrincipalContainer } from './components/styles/style'

const App = () => {

  const [countTotalLikes, setCountTotalLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const incrementLikes = () => {
    setCountTotalLikes(countTotalLikes + 1)
    console.log(countTotalLikes);
  }


  return (
    <PrincipalContainer>
      <div>
        <Estatus countTotalLikes={countTotalLikes} />
      </div>
      <div>
        <Posteos incrementsLikes={incrementLikes} />
      </div>
    </PrincipalContainer>
  )
}

export default App

{/**REVIEW => (9.5)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.

  +5 PTS POR LOS ESTILOS ADICIONALES CON STYLED-COMPONENTS
*/}