import React from 'react'

export default function Estatus({ posteos }) {
  
  return (
    <header>
        <h1>Estatus de posteos</h1>
        <p>Likes Totales:<span>{posteos}</span></p>
    </header>
  )
}
