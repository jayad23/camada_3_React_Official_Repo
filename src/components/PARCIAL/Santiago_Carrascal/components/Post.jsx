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



export default function Post(props) {
  const [likes, setLikes] = useState(0);
  {/*NOTE => 
    NO SE ESTÁ RECIBIENDO NI ACTUALIZANDO EL ESTADO 
    DE LOS LIKES EN NINGÚN ESTADO. ESO NO ESTÁ BIEN.
    PARA QUE ENTIENDAS LO QUE QUIERO DECIR, TOMA EL JSON
    Y CAMBIA EL VALOR DE LIKES DE CUALQUIER OBJETO, Y NOTARÁS
    QUE NO SE ESTÁ VIENDO RENDERIZADO EN LA UI. EN ESE CASO, NO HAY
    CONGRUENCIA CON LOS DATOS Y LOS ESTADOS.
 */}
  const clickBoton = () => {
    setLikes(likes + 1)
    props.aumentarLikes()
    console.log("Suma 1 like " + props.titulo);
  }
  return (
    <div className='posteo'>
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
      <button onClick={clickBoton}>👍</button>
      <h5>{likes > 10 ? "Mas de 10 likes" : "Likes: " + likes}</h5>
    </div>
  )
}