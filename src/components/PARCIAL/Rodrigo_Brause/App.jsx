import React, { useState } from 'react'
import Estatus from "./components/Estatus"
import Posteos from "./components/Posteos"
import './index.css';
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [countLikes, setCountLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const aumentarLikes = () => {
    setCountLikes(countLikes + 1);
  }

  return (
    <div className="App">
      <Estatus countLikes={countLikes} />
      <Posteos aumentarLikes={aumentarLikes} />
    </div>
  );
}

export default App;

{/**REVIEW => (9.0)
  - EXCELENTE FUNCIONALIDAD DEL CONTADOR DEL HEADER.
*/} 