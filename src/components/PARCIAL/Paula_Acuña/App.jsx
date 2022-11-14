import React, { useState } from 'react'
import Posteos from './components/Posteos'
import Estatus from "./components/Estatus"
{/** NOTE => HABÍA UN PROBLEMA CON LAS IMPORTACIONES.
  LAS EXPORTACIONES ESTABAN NOMBRADAS, Y LAS IMPORTACIONES ESTABAN DEFINIDAS POR DEFAULT.
  DEJO CONSTANCIA QUE LAS CORRIJO.

  HABÍA MUCHO DESORDEN CON LAS EXPORTACIONES.
  UNAS ESTABAN NOMBRADAS, Y OTRAS ESTABAN POR DEFAULT.
*/ }
import "./index.css"
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {

  const [MeGustaT, setMeGustaT] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const sumarMeGusta = () => {
    setMeGustaT(MeGustaT + 1);
  }


  return (
    <div className="App">
      <Estatus MeGustaT={MeGustaT} />
      <Posteos incrementsLikes={sumarMeGusta} />
    </div>
  );
}

export default App;

{/**REVIEW => (7.5)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}