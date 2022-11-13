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

export default function Post({ addLike, info }) {
  const [countLikes, setcountLikes] = useState(info.likes) //ANCHOR - EXCELENTE QUE TOMES EL VALOR DE LIKES Y LO ASIGNES A UNA VARIABLE DE ESTADO.

  const handleClick = () => {
    setcountLikes(countLikes + 1)
    addLike()
    console.log(info)
  }

  return (
    <div className='posteo'>
      <h3>{info.titulo}</h3>
      <p>{info.texto}</p>
      <button
        onClick={handleClick}>👍</button>
      <h5>{countLikes <= 10 ? countLikes : "Más de 10 likes"}</h5>
    </div>
  )
}
