import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div>Error, esta vista no existe!</div>
  )
}

export default Error