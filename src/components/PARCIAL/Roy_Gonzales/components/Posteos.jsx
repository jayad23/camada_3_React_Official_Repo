import React from 'react'
import data from './data.json'
import Post from './Post'


export default function Posteos({ totalMeGusta }) {
  return (
    <div className='container'>
      {
        data.map(e => (
          <Post
            key={e.id}
            id={e.id}
            titulo={e.titulo}
            texto={e.texto}
            meGustaProps={e.likes}
            totalMeGusta={totalMeGusta} />
        ))}
    </div>
  )
}

{/*NOTE => 
  LOS DATOS QUE ESTEMOS RECIBIENDO, SIEMPRE DEBEN EMPEZAR SU FLUJO 
  DENTRO DE UN ESTADO.
  NO ES UNA BUENA PRÁCTICA QUE DATA ESTÉ SIENDO MAPPED ASÍ COMO SE RECIBE.

  EN FUTUROS CASOS, ESFUERZATE POR NOMBRAR MEJOR LOS DATOS QUE RECIBES. 
  (e) EN EL MÉTODO MAP NO DICE NADA SOBRE LA INFORMACIÓN QUE CONTIENE.
 */}