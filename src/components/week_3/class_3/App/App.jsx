import React, { useState } from 'react'
import { ButtonContainer, Button } from "../../class_2/Container/style";
import Register from '../Register/Register';
import Login from '../Login/Login';
import LoginSuccess from '../Login/LoginSuccess';

const App = () => {
    const [component, setComponent] = useState(null);
    const [loginValues, setLoginValues] = useState({ email: "", password: "" })
    const [error, setError] = useState(null);
    const [registerValues, setRegisterValues] = useState({ name: "", email: "", password: "", repeatPassword: "" })

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        if (registerValues.password === registerValues.repeatPassword) {
            setError(null);
            setComponent("login")
        } else {
            setError("Passwords are not the same")
        }
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (loginValues.email === registerValues.email && loginValues.password === registerValues.password) {
            setError(null);
            setComponent("success")
        } else {
            setError("The credentials are not the same")
        }
    }

    const handleCleanUp = () => {
        setLoginValues({ email: "", password: "" })
        setRegisterValues({ name: "", email: "", password: "", repeatPassword: "" })
    }

    const childPropsLogin = {
        title: "Login Form",
        loginValues,
        setLoginValues,
        handleSubmitLogin,
        handleCleanUp
    }

    const childPropsRegister = {
        title: "Register Form",
        registerValues,
        setRegisterValues,
        handleRegisterSubmit
    }

    const handleSetComponent = (param) => {
        setComponent(param);
    }

    return (
        <div>
            {component === "register" ? (
                <Register {...childPropsRegister} />
            ) : component === "login" ? (
                <Login {...childPropsLogin} />
            ) : null}
            {error && (<p style={{ color: "red" }}>{error}</p>)}
            {
                component === "success" ? (
                    <LoginSuccess />
                ) : (
                    <ButtonContainer>
                        <Button onClick={() => handleSetComponent("register")}>No tengo cuenta</Button>
                        <Button onClick={() => handleSetComponent("login")} main={true}>Ya tengo cuenta</Button>
                    </ButtonContainer>
                )
            }
        </div>
    )
}

export default App