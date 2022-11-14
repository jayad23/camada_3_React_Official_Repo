import React, { useState } from 'react'
import "./index.css"
import Estatus from "./components/Estatus"
import Posteos from "./components/Posteos"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [contadorLikes, setContadorLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const aumentarLikes = () => {
    setContadorLikes(contadorLikes + 1);
  }
  return (
    <div className="App">
      <Estatus total={contadorLikes} />
      <Posteos aumentar={aumentarLikes} />
    </div>
  );
}

export default App;

{/**REVIEW => (4.0)
  PROBLEMAS CON UX DE LA APP:
  1. EL INCREMENTADOR EN LAS TARJETAS SOBRE PASA LOS 10 LIKES.
  2. EL INCREMENTADOR GENERAL NO SE ACTUALIZA.

  PROBLEMAS CON LA UI:
  1. EL BOTÓN DE LIKE SOLO TIENE UNA COMA.
*/}