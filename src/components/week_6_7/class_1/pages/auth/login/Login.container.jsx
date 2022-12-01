import React, { useState, useContext } from 'react'
import { AuthenticationContext } from '../../../context/GhContext';
import Login from './Login'
import { useNavigate } from "react-router-dom";
import { useCounter } from '../../../../hooks/useCounter';

const LoginContainer = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [counter, handlerCounter] = useCounter();
  const { handleAuthentication } = useContext(AuthenticationContext);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.email.length > 0 && values.password.length > 0) {
      handleAuthentication();
      navigate("/users")
      console.log("submit", values);
    }
  }

  const childProps = {
    values,
    handleSubmit,
    handleChange,
    counter,
    handlerCounter
  }
  return <Login {...childProps} />
}

export default LoginContainer