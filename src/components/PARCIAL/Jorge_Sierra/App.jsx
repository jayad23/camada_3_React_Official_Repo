import React, { useEffect, useState } from 'react'
import dataSet from './components/data.json'
import Estatus from './components/Estatus'
import Posteos from './components/Posteos'

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const updateTotal = () => {
    let count = 0;
    dataSet.map((item) => count += item.likes); //FIXME -> ESTO NO ESTÁ BIEN PORQUE ESTÁS INTENTANDO MUTAR UN VALOR.
    setTotalLikes(count);
  }

  useEffect(updateTotal, []);

  return (
    <div className="App">
      <Estatus totalLikes={totalLikes} />
      <Posteos updateTotal={updateTotal} />
    </div>
  );
}

export default App;

{/**REVIEW => (8.0)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}