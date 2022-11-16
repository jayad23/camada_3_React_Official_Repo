import React from 'react'
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

export default function Post({ aumentarUnLike, data }) {

  const [Likes, setLikes] = useState(data.likes);

  const Like = () => {
    setLikes(Likes + 1);
    aumentarUnLike();
    {/** FIXME IMPORTANT => aumentarUnLike() LLEGA COMO UNDEFINED
    PORQUE EN POSTEOS LA RECIBES, Y LA ENVÍAS CON OTRO NOMBRE. 
    LUEGO, LA RECIBES NUEVAMENTE AQUÍ CON EL NOMBRE ORIGINAL.
    */ }
  }

  return (
    <div className='posteo'>
      <h3>{data.titulo}</h3>
      <p>{data.texto}</p>
      <button onClick={Like}>Like</button>
      <h5>{cantLikes <= 10 ? "Likes: " + cantLikes : null}</h5>
      {/** FIXME IMPORTANT=> AQUÍ TIENES ALGO QUE SE LLAMA CANTLIKES
       * QUE ES UNDEFINED, NO EXISTE. LA VARIABLE SE LLAMA LIKES.
       * 
       * POR OTRO LADO, NO TENÍAS IMPORTADO EL USESTATE.
       * PARECE UN POCO EXTRAÑO PORQUE TODO LO DEMÁS SE BIEN DESARROLLADO.
       * 
       * FINALMENTE, SI EL CONTADOR DE LIKES ES 10, NO DEBE MOSTRAR NULL
       * DEBERÍA MOSTRAR OTRO MENSAJE.
        */ }
    </div>
  )
}
