import React from 'react'

// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Estatus({like}) {

  return (
    <header>
        <h1>Estatus de posteo</h1>
        <p>Likes totales: <span>{like}</span></p>
    </header>
  )
}
