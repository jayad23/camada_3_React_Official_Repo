import React from 'react'
import "../index.css"

const Estatus = ({TotalLikes}) => {
  return (
    <header>
      <h1>Estatus de posteos</h1>
      <p>Likes totales: <span>{TotalLikes}</span></p>  
    </header>
  )
}

export default Estatus