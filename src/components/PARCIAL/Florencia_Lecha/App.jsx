import React, { useState } from 'react'
import "./index.css";
import { Estatus } from './components/Estatus';
import { Posteos } from './components/Posteos';

function App() {

  const [countTotalLikes, setCountTotalLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const handleAddTotalLike = () => {
    setCountTotalLikes(countTotalLikes + 1)
  }

  return (
    <div className="App">
      <Estatus countTotalLikes={countTotalLikes} />
      <Posteos handleAddTotalLike={handleAddTotalLike} />
    </div>
  );

}

export default App;

{/**REVIEW => (9.0)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}