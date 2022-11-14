import React, { useState } from 'react'
import Estatus from './components/Estatus'
import Posteos from "./components/Posteos"
import "./index.css"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [totalDeLikes, setTotalDeLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const resultadoLikes = () => {
    setTotalDeLikes(totalDeLikes + 1);
    console.log(totalDeLikes);
  }

  return (
    <body>
      <nav>
        <Estatus totalDeLikes={totalDeLikes} />
        {/** FIXME => LA ETIQUETA <NAV/> DEBERÍA IR DENTRO DE LA ETIQUETA <HEADER />
        */ }
      </nav>
      <Posteos resultadoLikes={resultadoLikes} />
    </body>
  );
}

export default App;

{/**REVIEW => (1.0)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}