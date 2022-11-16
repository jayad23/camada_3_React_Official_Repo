import React from 'react'
import './index.css';
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';
import { useState } from 'react';

function App() {

  const [meGustaTotal, setMeGustaTotal] = useState(0)
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
  const AumentaMegustaTotal = () => (
    setMeGustaTotal(meGustaTotal + 1)
  );

  return (
    <div className="App">
      <Estatus
        posteos={meGustaTotal} />
      <Posteos
        totalMeGusta={AumentaMegustaTotal} />
    </div>
  );
}

export default App;

{/**REVIEW => (9.0)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}