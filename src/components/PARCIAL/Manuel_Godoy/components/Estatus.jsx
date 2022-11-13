import React from 'react'
import "../index.css"

const Estatus = ({countTotalLikes}) => {
  return (
    <header>
      <h1>Estatus de posteos</h1>
      <p>Likes totales: <span>{countTotalLikes}</span></p>  
    </header>
  )
}

export default Estatus