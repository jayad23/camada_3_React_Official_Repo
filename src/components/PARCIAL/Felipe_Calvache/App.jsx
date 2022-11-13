// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.
// import Posteos from "./componets/Posteos"
// import Estatus from "./componets/Estatus"
import React, { useState } from 'react'
import "./index.css"
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';

function App() {

  const [posteos, setPosteos] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }

  const totalLikes = () => {
    setPosteos(posteos + 1);
  }

  return (
    <div className="App">
      <Estatus posteos={posteos} />
      <Posteos totalLikes={totalLikes} />
    </div>
  );
}

export default App;

{/**REVIEW => (8.5)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}