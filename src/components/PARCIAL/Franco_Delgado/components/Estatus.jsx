import React from 'react'


// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Estatus({ contabilizarLikes }) {
  {/** NOTE => LAS PROPS NO SE RECIBEN DE FORMA DIRECTA.
    //FIXME - DEBES RECIBIRLAS CON LA PALABRA PROPS, 
    Ó DESESTRUCTURANDO EL VALOR QUE ESTÁS PASANDO DESDE EL PADRE.

    ESTE PROBLEMA ESTÁ BLOQUEANDO LA APP. AL DESESTRUCTURARLA, LA UI SERÁ RENDERIZABLE. SIN FUNCIONAR, PERO VISUAL.
    //NOTE => DEJO COMO CONSTANCIA QUE FUI YO QUIEN DESESTRUCTURÓ LA PROP; NO ESTABA ASÍ EN EL CÓDIGO ORIGINAL.
  */ }



  return (
    <header>
      <h1>Estatus De Post</h1>
      <p> Likes en total
        <span>
          {contabilizarLikes}
        </span>
      </p>
    </header>
  )
}
