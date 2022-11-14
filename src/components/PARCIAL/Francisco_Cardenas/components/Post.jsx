import React, { useState } from "react";
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

export default function Post({
  titulo,
  texto,
  likes,
  incrementar,
  state,
  setstate,
}) {
  {/** FIXME => LIKES ESTÁ LLEGANDO COMO UNDEFINED.
    POR DOS RAZONES:
    1. EL NOMBRE DE LA PROP QUE ENVÍAS NO CONCUERDA CON LA QUE RECIBES.
    2. EL NOMBRE DE LA PROPIEDAD DE DÓNDE SACAS EL DATO, NO CONCUERDA CON LO QUE TIENES DECLARADO.
    VER COMPONENT POSTEOS.JSX
  */ }
  const [estadoLikes, setestadoLikes] = useState(likes);
  {/** ANCHOR => ¿PARA QUÉ SE ESTÁ DECLARANDO UN ESTADO QUE NO SE VA A UTILIZAR?*/ }
  const add = () => {
    incrementar();
  };

  const muchoslikes = () => {
    if (likes > 10) {
      return "mas 10 de likes"
    }
    if (likes < 10) {
      return "hay menos de 10 likes ;)"
    }
  }
  return (
    <div className="producto">
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button onClick={add}>Likes</button>
      <h1>{muchoslikes}</h1>
      {/*NOTE => 
          YA QUE "muchoslikes" ES UNA FUNCIÓN, DEBERÍA LLEVAR PARÉNTESIS = muchoslikes();
        */}
    </div>
  );
}
