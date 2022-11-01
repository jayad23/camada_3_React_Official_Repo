import React, { useState } from 'react'
import style from "./styles/style.module.css";

const Counter = ({ title, counterFn, handleIncrementFn }) => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div className={style['counterContainer']}>
            <button onClick={handleIncrementFn}>Incrementar</button>
            <h1>{title} es: {counterFn}</h1>
        </div>
    )
}

export default Counter