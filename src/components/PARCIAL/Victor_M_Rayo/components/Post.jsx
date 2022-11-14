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

export default function Post({ props, handlerClick, cantidadLikes }) {
  console.log("🚀 ~ file: Post.jsx ~ line 16 ~ Post ~ cantidadLikes", cantidadLikes)
  {/*NOTE => 
  ¿EN DÓNDE SE USA "cantidadLikes"?
  POR OTRA PARTE, SU VALOR ESTÁ LLEGANDO COMO UNDEFINED. ¿POR QUÉ?
  NO EXISTE ESA PROPIEDAD EN LO QUE ESTÁS MÁNDANDO DESDE POSTEOS.JSX
 */}
  const [likePost, setlikePost] = useState(0)
  {/*FIXME => 
    NO ESTÁ BIEN QUE LA TARJETA TENGA UN ESTADO INDEPENDIENTE AL VALOR DE LIKES
    QUE ESTÁ RECIBIENDO DE LOS DATOS. ESO CAUSA QUE EL COMPONENTE SIEMPRE ESTÉ DESACTUALIZADO.
    LO QUE DEBERÍA ESTAR EN ESE ESTADO ES PROPS.LIKES
 */}

  const handlerStock = () => {
    setlikePost(likePost + 1)
    handlerClick()
    console.log("se sumo 1 like al posteo " + props.titulo);
  }

  return (
    <div className='posteo'>
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
      {
        likePost < 10 ? (
          <button onClick={handlerStock}>&#128077;</button>
        ) : (
          <button disabled>Más de 10 likes</button>
        )
      }
      <h5>{likePost}</h5>
      {/*NOTE => 
        FALTA VALIDACIÓN EN ESTE <H5/>, PORQUE SI EL VALOR 1UE RECIBE SUPERA LOS 10 LIKES,
        IGUAL SE RENDERIZA EN LA UI, Y ESO NO ES LO ESPERADO.
      */}
    </div>
  )
}
