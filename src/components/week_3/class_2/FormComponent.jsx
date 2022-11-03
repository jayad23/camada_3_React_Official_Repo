import React, { useState } from 'react'
import Container from './Container/Container'

const FormComponent = () => {
    const [inputValues, setInputValues] = useState({ name: "", lastname: "", email: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues)
        e.target.reset();
    }

    const handleCleanUp = () => {
        console.log("desde clean")
        setInputValues({ name: "", lastname: "", email: "", password: "" })
    }

    const childProps = {
        inputValues,
        setInputValues,
        handleSubmit,
        handleCleanUp
    }
    return <Container {...childProps} />
}

export default FormComponent