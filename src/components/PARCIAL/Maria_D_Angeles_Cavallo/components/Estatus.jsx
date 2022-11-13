import React from 'react'
import { Paragraphs, PrincipalContainer, Title } from "../components/styles/style"

// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

const Estatus = ({ countTotalLikes }) => {
  
  return (
      <PrincipalContainer>
        <header>
            <Title>Estatus de posteos</Title>
            <Paragraphs>Likes totales: <span>{countTotalLikes}</span></Paragraphs>
        </header>
      </PrincipalContainer>
  )
}

export default Estatus;
