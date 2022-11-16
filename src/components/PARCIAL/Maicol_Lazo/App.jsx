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

{/** FIXME IMPORTANT=> ¿ESTO TE FUNCIONÓ? */ }

const [cantidadLikes, setCantLikes] = useState(0)

const aumentarUnLike = () => {
  setCantLikes(prev => prev + 1);
}

{/** FIXME IMPORTANT => LOS ESTADOS SIEMPRE DEBEN ESTAR DECLARADOS 
DENTRO DEL CUERPO DEL COMPONENTE. */ }

function App() {

  return (
    <body>
      <nav>
        <Estatus cantidadLikes={cantidadLikes} />
      </nav>
      <Posteos aumentarUnLike={aumentarUnLike} />
    </body>
  )
}

export default App;

{/**REVIEW => (2.0)
  EL CÓDIGO NO FUNCIONÓ. LAS RAZONES ESTÁN EN LOS COMENTARIOS
  QUE DICEN "FIXME IMPORTANT" EN TU CÓDIGO.
  SI ESO SE ARREGLA, EL CÓDIGO FUNCIONA... LO PROBÉ!
*/}