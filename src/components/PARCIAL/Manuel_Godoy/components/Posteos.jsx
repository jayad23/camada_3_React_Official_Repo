import React from 'react'
import data from "./data.json"
import Post from "./Post"
import "../index.css"

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