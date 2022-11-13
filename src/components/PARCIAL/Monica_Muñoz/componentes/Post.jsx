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

export default function Post({ cuentaTotalClicks, item, }) {

  const [conteoClicks, setconteoClicks] = useState(item.likes) //ANCHOR - EXCELENTE QUE TOMES EL VALOR DE LIKES Y LO ASIGNES A UNA VARIABLE DE ESTADO.

  const handleClick = () => {
    setconteoClicks(conteoClicks + 1);
    cuentaTotalClicks();
    console.log((conteoClicks + 1) + " Suma 1 like: " + item.titulo);
  }

  return (
    <div className='posteo'>
      <h3>{item.titulo}</h3>
      <p>{item.texto}</p>
      <button
        onClick={handleClick}
      >&#128077;</button>
      <h5>{conteoClicks <= 10 ? conteoClicks : "Mas de 10 likes"}</h5>
    </div>
  )
}
