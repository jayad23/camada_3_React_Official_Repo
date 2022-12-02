import React, { useContext } from 'react'
import { DarkModeContext } from './contex-darkMode/DarkMode';
import { useNavigate } from 'react-router-dom'

const About = () => {
  const { state, dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Yo soy about</h1>
      <button onClick={() => navigate("/")}>Volver a home</button>
      <button onClick={() => dispatch({ type: state.bgFlag })}>Dark Mode</button>
    </div>
  )
}

export default About