import React, { useState } from 'react'
import Posteos from "./components/Posteos"
import Estatus from "./components/Estatus"
import "./index.css"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [contadorTotalLikes, setContadorTotalLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const aumentarLikes = () => {
    setContadorTotalLikes(contadorTotalLikes + 1);
  }

  return (
    <div className="App">
      <Estatus contadorTotalLikes={contadorTotalLikes} />
      <Posteos aumentarLikes={aumentarLikes} />
    </div>
  );
}

export default App;

{/**REVIEW - (9.0)
  EL CONTADOR EN APP NO DEBERÍA RECIBIR MÁS VALORES DE LOS
  OTROS CONTADORES UNA VEZ ESTOS HAYAN LLEGADO HASTA 1O.
 */}