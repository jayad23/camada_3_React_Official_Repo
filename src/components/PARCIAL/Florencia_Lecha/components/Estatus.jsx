import React from 'react'

export function Estatus({ countTotalLikes }) {
  
  return (
    <header>
      <h1>Estatus de Posteos</h1>
      <p>Likes totales: <span>{countTotalLikes}</span></p>
    </header>
  )

}
