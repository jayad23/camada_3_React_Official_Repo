import React, { useState } from "react";
import "./index.css"
import Estatus from "./components/Estatus";
import Posteos from "./components/Posteos";
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [state, setState] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
    - NO ESTÁ BIEN DEFINIR UNA VARIABLE DE ESTADO QUE SE LLAME "STATE" Y "SETSTATE".
  */ }
  const incrementar = () => {
    setState(state + 1);
  };

  return (
    <div className="App">
      <Estatus state={state} />
      <Posteos incrementar={incrementar} />
    </div>
  );
}

export default App;
{/**REVIEW => (7.0)
  1. EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
     DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
  2. SOLO SE MUESTRA LA CUENTA DEL HEADER, Y SE DEBE MOSTRAR UN CONTADOR EN LAS TARJETAS.
*/}