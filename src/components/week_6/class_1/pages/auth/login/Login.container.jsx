import React, { useState } from 'react'
import Login from './Login'
import { useNavigate } from "react-router-dom";
const LoginContainer = ({ setIsAuth }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.email.length > 0 && values.password.length > 0) {
      setIsAuth(true);
      navigate("/home")
      console.log("submit", values);
    }
  }

  const childProps = {
    values,
    handleSubmit,
    handleChange,
  }
  return <Login {...childProps} />
}

export default LoginContainer