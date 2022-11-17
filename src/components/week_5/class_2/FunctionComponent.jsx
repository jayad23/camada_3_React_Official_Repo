import React, { useState, useEffect } from 'react'
import axios from "axios"
const FunctionComponent = () => {
  const [index, setIndex] = useState(1);
  const [character, setCharacter] = useState(null);
  //useEffect(() => {}, []) // componentDidMount
  //useEffect(() => {}, [index]) // componentDidUpdate

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${index}`)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [index, updateLike])
  //una vez!
  return (
    <div>
      <p>INDEX : {index}</p>
      <h1>El nombre es: {character?.name}</h1>
      <img src={character?.image} />
      <button onClick={() => setIndex(index + 1)}>Incrementar Index</button>
    </div>
  )
}

export default FunctionComponent