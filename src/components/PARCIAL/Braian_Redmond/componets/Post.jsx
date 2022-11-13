import React, { useState } from 'react'


const Post = ({ incrementsLikes, data }) => {
  const [Likes, setLikes] = useState(data.likes); //ANCHOR - EXCELENTE QUE TOMES EL VALOR DE LIKES Y LO ASIGNES A UNA VARIABLE DE ESTADO.



  const darLike = () => {
    setLikes(Likes + 1);
    console.log("Sumó un like el posteo: " + data.titulo)
    incrementsLikes();

  }


  return (
    <div className='posteo'>
      <h3>{data.titulo}</h3>
      <p>{data.texto}</p>
      <button onClick={darLike}>👍</button>
      <h5>{Likes <= 10 ? "Likes: " + Likes : "Más de 10 likes"}</h5>
    </div>
  )
}

export default Post