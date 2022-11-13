import React, { Fragment, useState } from 'react'
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

export default function Post({ data, like }) {

  const [likes, setLikes] = useState(0);
  {/** FIXME => ¿POR QUÉ SE INICIA LA CUENTA EN 0? - 
    ¿CÓMO SABES QUE SIEMPRE SERÁ 0? 

    ESTO NO ESTÁ BIEN PORQUE EL COMPONENTE NO ESTA SINCRÓNIZADO CON EL VALOR DE LIKES QUE ESTÁS RECIBIENDO.
    POR OTRO LADO, TIENES DOS VARIABLES CON EL MISMO NOMBRE.
  */ }

  const handleLike = () => {
    setLikes(likes + 1)
    like()
  }

  console.log(likes);
  return (
    <Fragment>
      {data.map(post => (
        <div className='posteo' key={post.id}>
          <h3>{post.titulo}</h3>
          <p>{post.texto}</p>
          <button onClick={() => handleLike()}>👍</button>
          <h5>likes:{likes}</h5>
        </div>
      ))}
    </Fragment>
  )
}
