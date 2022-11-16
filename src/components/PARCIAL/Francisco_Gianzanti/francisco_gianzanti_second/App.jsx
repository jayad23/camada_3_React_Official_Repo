// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.
import React, { useState } from 'react';
import './index.css';
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';

function App() {

  const [likesTotales, setLikesTotales] = useState(0);

  const AumentaLikesTotales = () => (
    setLikesTotales(likesTotales + 1)
  );

  return (
    <div className="App">
      <Estatus posteos={likesTotales} />
      <Posteos totalLikes={AumentaLikesTotales} />
    </div>
  );
}

export default App;
