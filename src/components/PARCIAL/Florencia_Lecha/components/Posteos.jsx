import React from 'react'
import { Post } from './Post'
import data from "./data.json"

export function Posteos({ handleAddTotalLike }) {

  return (
    <div className='container'>
      {data.map(post => <Post key={post.id} handleAddTotalLike={handleAddTotalLike} post={post} />)}
    </div>
  )

}

{/*NOTE => 
  LOS DATOS QUE ESTEMOS RECIBIENDO, SIEMPRE DEBEN EMPEZAR SU FLUJO 
  DENTRO DE UN ESTADO.
  NO ES UNA BUENA PRÁCTICA QUE DATA ESTÉ SIENDO MAPPED ASÍ COMO SE RECIBE.
 */}