import React, { useState } from 'react'

export function Post({ handleAddTotalLike, post }) {

  const { titulo, texto, likes } = post
  const [countLikesPost, setCountLikesPost] = useState(likes); //NOTE - MUY BUENO QUE HAYAS GUARDADO EL VALOR DE LOS LIKES EN UNA VARIABLE DE ESTADO.

  const handleAddlLikePost = () => {
    setCountLikesPost(countLikesPost + 1)
    handleAddTotalLike()
    console.log("Suma 1 like: " + titulo);
  }

  return (
    <div className='posteo'>
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button onClick={handleAddlLikePost}>👍</button>
      <h5>{countLikesPost <= 10 ? "Likes: " + countLikesPost : "Más de 10 likes."}</h5>
    </div>
  )

}
