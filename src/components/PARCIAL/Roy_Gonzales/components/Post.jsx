import React, { useState } from 'react'


export default function Post({ id, titulo, texto, meGustaProps, totalMeGusta }) {

  const [meGusta, setMegusta] = useState(meGustaProps); //ANCHOR - EXCELENTE QUE TOMES EL VALOR DE LIKES Y LO ASIGNES A UNA VARIABLE DE ESTADO.

  const aumentaMeGusta = () => {
    setMegusta(meGusta + 1)
    totalMeGusta();
  }

  return (
    <div className='posteo'>
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button onClick={aumentaMeGusta}>&#128077;</button>
      <h5>{meGusta > 10 ? 'Mas de 10' : meGusta}</h5>
    </div>
  )
}
