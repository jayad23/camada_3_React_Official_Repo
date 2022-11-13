import React from 'react';
import "./index.css"
import Estatus from "./components/Estatus";
import Posteos from "./components/Posteos";
import { useState } from "react"; //FIXME - ESTA IMPORTACIÓN DEBERÍA ESTAR EN LA MISMA LÍNEA EN LA QUE SE IMPORTA REACT AL COMPONENTE. EG. => import React, { useState } from "react"

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
	const [total, setTotal] = useState(0);
	{/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 
  */ }
	const aumentar = () => {
		setTotal(total + 1);
	};

	return (
		<div className="App">
			<Estatus total={total} />
			<Posteos aumentar={aumentar} />
		</div>
	);
}

export default App;

{/**REVIEW => (8.0)
  EL CONTADOR DEL HEADER NO DEBERÍA SUMAR MÁS VALORES
  DE PARTE DEL CONTADOR QUE YA ALCANZÓ SU LÍMITE.
*/}