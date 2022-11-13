import React from 'react'
import { useState } from 'react'
// El componente Post no tiene componentes hijos.
// ESTADO: Post debe tener un número para almacenar la cantidad de likes, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Post debe tener un método para manejar el click de su boton, el cual debe:
//  - sumar 1 like al posteo
//  - sumar en la cantidad total de likes contabilizada por App
//  - mostrar en consola qué posteo sumó un like
// PROPS: Post recibe todos los campos que muestra en pantalla: titulo, texto, likes y el método heredados para sumar en el total.
// Maqueta de Post:
//    h3
//    p
//    button       (este boton debe permitir sumar likes)
//    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")

export default function Post({ postData, handleClickLikesTotales }) {
  const [likes, setLikes] = useState(postData.likes); //NOTE - EXCELENTE. LOS VALORES ESTÁTICOS DEBEN ESTAR SIEMPRE CONTENIDOS EN UN ESTADO.

  const handleClickLikeButton = () => {
    setLikes((prevLikes) => prevLikes + 1);
    handleClickLikesTotales();
    console.log(`Suma 1 like: ${postData.titulo}`);
  }

  return (
    <div className='posteo'>
      <h3>{postData.titulo}</h3>
      <p>{postData.texto}</p>
      <button onClick={handleClickLikeButton} disabled={likes >= 10}>👍</button>
      {/**NOTE - UN PLUS MUY VALISO EL DISABLED*/}
      <h5>{likes >= 10 ? "Mas de 10 likes" : `Likes ${likes}`}</h5>
    </div>
  )
}
