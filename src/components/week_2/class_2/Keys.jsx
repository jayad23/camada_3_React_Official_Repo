import React, { useState } from 'react'

const fruits = [
    {
        id: 1,
        value: "Apples"
    },
    {
        id: 2,
        value: "Pears"
    },
    {
        id: 3,
        value: "Watermelon"
    },
    {
        id: 4,
        value: "Oranges"
    }
]

const Keys = () => {
    //Bonus - Don't kill yourself.
    const [arrOfFruits, setArrOfFruits] = useState(fruits)
    //METHOD
    //MAP => FUNCIÓN PARA MANEJO DE ESTADO INMUTABLES
    //FILTER

    const handleDelete = (item) => {
        const newArrOfFruits = arrOfFruits.filter(i => i !== item);
        setArrOfFruits(newArrOfFruits);
    }


    return (
        <div>
            <h1>Keys</h1>
            <ul>
                {
                    arrOfFruits.map((item, index) => (
                        <li key={item.value}>
                            <button onClick={() => handleDelete(item)}>Eliminar</button>
                            <label>{item.value}</label>
                            <input defaultValue={item.value} readOnly />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Keys