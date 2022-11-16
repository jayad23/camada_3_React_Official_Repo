import React, { useState } from 'react'
import Estatus from "./components/Estatus";
import Posteos from "./components/Posteos";
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {



  const [countTotalLikes, setCountTotalLikes] = useState(0); //NOTE => useState NO ESTABA IMPORTADO.
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
        {/** FIXME => LA ETIQUETA <NAV/> DEBERÍA IR DENTRO DE LA ETIQUETA <HEADER />
        */ }
      </nav>
      <Posteos incrementsLikes={incrementsLikes} />
    </body>
  )
}
export default App
{/**REVIEW => (8.5)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.

  - NO ESTABAN LAS IMPORTACIONES DE COMPONENTES, STATE Y DATA.

  - TEN EN CONSIDERACIÓN LA INDENTACIÓN DEL CÓDIGO.
*/}