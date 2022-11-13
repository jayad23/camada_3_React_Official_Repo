import React from 'react'
import data from "./data.json"
import Post from "./Post"
import "../index.css"
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Posteos es el padre de:
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.


// Mapeamos la base de datos (data.json) para renderizar cada una de las cards, tambien traemos el contador global, para que cada vez que se le de un like a una tarjeta, sume.
// pasamos por props a data, para que el hijo (post) pueda obtener los detalles.
const Posteos = ({ incrementsLikes }) => {

  return (
    <div className='container'>
      {data.map(data => (<Post key={data.id} data={data} incrementsLikes={incrementsLikes} />))}
    </div>

  )
}

export default Posteos

{/*NOTE => 
  LOS DATOS QUE ESTEMOS RECIBIENDO, SIEMPRE DEBEN EMPEZAR SU FLUJO 
  DENTRO DE UN ESTADO.
  NO ES UNA BUENA PRÁCTICA QUE DATA ESTÉ SIENDO MAPPED ASÍ COMO SE RECIBE.
 */}