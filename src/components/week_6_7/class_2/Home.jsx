import React, { useState, useContext } from 'react'
import { DarkModeContext } from './contex-darkMode/DarkMode'
import { Link } from 'react-router-dom'
//#393944 dark
//#eee light
const Home = () => {
  const { state, dispatch } = useContext(DarkModeContext);
  return (
    <div>
      <h1>Yo soy Home</h1>
      <button onClick={() => dispatch({ type: state.bgFlag })}>Dark mode</button>
      <Link to="/about">Ir a about</Link>
    </div>
  )
}

export default Home