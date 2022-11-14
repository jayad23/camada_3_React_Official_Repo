import React from 'react'
import { useState } from 'react'
import '../index.css' //NOTE => NO TIENES QUE IMPORTAR INDEX EN CADA ARCHIVO.
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

const post = ({ ClickCounter, info }) => {
  console.log("🚀 ~ file: Post.jsx ~ line 18 ~ post ~ info", info)
  const [likesCount, setlikesCount] = useState(info.likes)

  const countLikes = () => {
    setlikesCount(likesCount + 1)
    ClickCounter();
    console.log(info)

    return (
      <div className='posteo'>
        <h3>{info.titulo}</h3>
        <p>{info.texto}</p>
        <buttom onClick={countLikes}>👍</buttom>
        <h5>{likesCount <= 10 ? likesCount : "mas de 10 likes"}</h5>
      </div>
    )

    {/** FIXME => NO SE ESTÁ RENDERIZANDO NADA EN LA UI, PORQUE EL RETURN TE QUEDÓ METIDO EN UNA FUNCIÓN QUE:
      1. NUNCA SE ESTÁ INVOCANDO.
      2. NO SE PUEDE INVOCAR SIN GENERAR UN ESCAPE DE MEMORIA AL ENTRAR EN UN CICLO SE SOBRE-RENDERS.
    */ }
  }
}

export default post
