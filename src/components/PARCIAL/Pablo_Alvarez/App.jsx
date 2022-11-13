import React, { useState } from 'react'
import "./index.css";
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';
import data from './components/data.json'
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [likes] = data;
  const [totalLike, setTotalLike] = useState(likes.likes);
  {/**TODO ENCAPSULAR EL VALOR DE LOS LIKES EN UN ESTADO ES COMO SE DEBE HACER.
    SIN EMBARGO, LO QUE TENÍAS QUE HACER ERA SUMAR TODOS LOS LIKES, Y ESE RESULTADO ERA EL QUE DEBÍAS GUARDAR EN EL ESTADO.
 */ }
  const handleLikes = () => {
    setTotalLike(totalLike + 1)
  }


  return (
    <div className="App">
      <Estatus like={totalLike} />
      <Posteos setTotalLike={handleLikes} />
    </div>
  );
}

export default App;

{//FIXME - (5.0)
  /**
   * EL INCREMENTADOR ESTÁ AFECTADO TODOS LOS POSTS POR IGUAL.
   * ESO NO ESTÁ BIEN.
   */
}