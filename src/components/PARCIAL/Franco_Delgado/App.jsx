import React, { useState } from 'react'
import "./index.css"
import Estatus from './components/Estatus'
import Posteos from './components/Posteos';
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [contarLikes, setContarLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const contabilizarLikes = () => {

    setContarLikes(contarLikes + 1);

    console.log(contarLikes);

  }




  return (
    <div className="App">
      <Estatus contarLikes={contarLikes} />
      <Posteos contabilizarLikes={contabilizarLikes} />
    </div>
  );
}

export default App;

{/**REVIEW => (1.0)
  DEJO IMAGEN DE CÓMO RENDERIZA EL PROYECTO.
  LOS COMENTARIOS SE ENCUENTRAN EN LOS COMPONENTES CORRESPONDIENTES.
*/}