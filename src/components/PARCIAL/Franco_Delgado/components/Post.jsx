import React, { useState } from 'react'
import data from './data.json'


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

export default function Post() {
  {/** NOTE => ESTÁS PASANDO PROPS A ESTE COMPONENTE DESDE EL COMPONENTE POSTEOS, Y NO LAS ESTÁS RECIBIENDO.
    //FIXME - NO PUEDES PASARLE LOS LIKES DESDE POSTEOS.JSX Y LUEGO INVOCAR LOS DATOS DE FORMA INDEPENDIENTE EN EL COMPONENTE HIJO. 
    ESO HACE QUE NO SEA UN FLUJO CONGRUENTE.
    - COMO NO ESTÁS RECIBIENDO LAS PROPS, NO HAY VISUAL DEL CONTENIDO.
  */ }
  const [cantidadDeLikes, setCantidadDeLikes] = useState(data.darLike)

  //////////////////

  const paraDarLikes = () => {

    setCantidadDeLikes(cantidadDeLikes + 1);

    cantidadDeLikes();
  }

  // Maqueta de Post:
  //    h3
  //    p
  //    button       (este boton debe permitir sumar likes)
  //    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")


  return (
    <div className='posteo'>
      <h3>
        <p>
          <h5 {...cantidadDeLikes < 11 ? "Likes: " + cantidadDeLikes : "Más de 10 likes"}>
            {/** FIXME => POR QUÉ ESTÁS HACIENDO UN SPREAD DE CANTIDADDELIKES?
            */ }
            <button onclick={paraDarLikes}>Dar like al post </button>
          </h5>
          {/** FIXME => UN <H5/> NO PUEDE SER HIJO DE UN <P>.
           * LAS ETIQUETAS DE TEXTO => P, H1-H6, SPAN, A... NO SON ETIQUETAS CONTENEDORAS.
           * SI NECESITAS ENVOLVER OTRO COMPONENTE, USAS UN DIV, SECTION, MAIN... O HASTA UN FRAGMENT.
          */ }
        </p>
      </h3>
    </div>
  )
}

