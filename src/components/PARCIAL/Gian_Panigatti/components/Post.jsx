import React, { useState } from 'react'
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

export default function Post({ datos, aumentarLikes }) {
  const [cantidadLikes, setCantidadLikes] = useState(datos.likes) //NOTE - EXCELENTE PRÁCTICA EN ENCAPSULAR UN DATO ESTÁTICO EN UN ESTADO.

  const handleClick = () => {
    setCantidadLikes(cantidadLikes + 1)
    aumentarLikes()
    console.log("Sumo 1 like: " + datos.titulo)
  }
  return (
    <div className='posteo'>
      {/* maquetar Post aquí */}
      <h3>{datos.titulo}</h3>
      <p>{datos.texto}</p>
      <button onClick={handleClick}>👍</button>
      <h5>{cantidadLikes > 9 ? <p>Mas de 10 likes</p> : <p>Likes {cantidadLikes} </p>}</h5>
    </div>
  )
}
