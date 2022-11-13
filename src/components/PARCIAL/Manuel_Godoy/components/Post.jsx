import React, { useState } from 'react'
import Posteos from './Posteos';

const Post = ({ incrementsLikes, data }) => {
  const [cantLikes, setCantLikes] = useState(data.likes); //ANCHOR - EXCELENTE QUE TOMES EL VALOR DE LIKES Y LO ASIGNES A UNA VARIABLE DE ESTADO.

  const likeEnPosteo = () => {
    setCantLikes(cantLikes + 1);
    if (cantLikes < 10) {
      incrementsLikes();
      console.log("Sumó un like el posteo: " + data.titulo);
    }
  }

  return (
    <div className='posteo'>
      <h3>{data.titulo}</h3>
      <p>{data.texto}</p>
      <button onClick={likeEnPosteo}>👍</button>
      <h5>{cantLikes <= 10 ? "Likes: " + cantLikes : "Mas de 10 likes"}</h5>
    </div>
  )
}

export default Post