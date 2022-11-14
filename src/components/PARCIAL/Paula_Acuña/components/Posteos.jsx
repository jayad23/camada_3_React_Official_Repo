import React from 'react'
import data from "./data.json"
import { Post } from "./Post"
import "../index.css" //NOTE => POR QUÉ IMPORTAS INDEX EN APP Y EN ESTE ARCHIVO? - CON IMPORTARLO EN EL COMPONENTE DE MAYOR JERARQUÍA <APP/> YA LO TENDRÍAS DISPONIBLE EN LOS OTROS COMPONENTES.

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Posteos es el padre de:
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

const Posteos = ({ sumarMeGusta }) => {
  {/** NOTE => SUMARMEGUSTA => ES UNDEFINED PORQUE NO ES EL NOMBRE DE LA PROP QUE ESTÁS PASANDO.
      //TODO => MIRA EN CONSOLA QUÉ ERROR TE ARROJA.
      //FIXME - CAMBIAR POR "incrementsLikes" PARA QUE FUNCIONE.
  */ }
  return (
    <div className='container'>
      {data.map(data => (<Post key={data.id} data={data} sumarMeGusta={sumarMeGusta} />))}
    </div>

  )

}

export default Posteos;

{/*NOTE => 
  LOS DATOS QUE ESTEMOS RECIBIENDO, SIEMPRE DEBEN EMPEZAR SU FLUJO 
  DENTRO DE UN ESTADO.
  NO ES UNA BUENA PRÁCTICA QUE DATA ESTÉ SIENDO MAPPED ASÍ COMO SE RECIBE.
 */}