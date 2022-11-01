import React, { useState } from 'react'
import Counter from './class_1/Counter'
import CounterClass from './class_1/CounterClass'

const LocalApp = () => {
    const [showComponent, setShowComponent] = useState(null);
    const [counterFn, setCounterFn] = useState(0);
    const [counterClass, setCounterClass] = useState(16);

    const handleIncrementFn = () => {
        setCounterFn(prevState => prevState + 1)
    }

    const handleIncrementClass = () => {
        setCounterClass(prevState => prevState + 1)
    }

    const fnChildProps = {
        counterFn,
        handleIncrementFn,
        title: "Componente Funcional C-3"
    }

    const classChildProps = {
        counterClass,
        handleIncrementClass,
        title: "Counter Class C-3"
    }

    const renderComponent = () => {
        if (showComponent === "class")
        {
            return <CounterClass {...classChildProps} />
        }

        if (showComponent === "fn")
        {
            return <Counter {...fnChildProps} />
        }

        return <h5>Selecciona un componente</h5>
    }

    const handleSelectComponet = (arg) => {
        setShowComponent(arg)
    }

    return (
        <div style={{ marginLeft: "30px" }}>
            LocalApp
            {renderComponent()}
            <button onClick={() => handleSelectComponet("class")}>Mostrar componente de clase</button>
            <button onClick={() => handleSelectComponet("fn")}>Mostrar componente Funcional</button>
            <button onClick={() => handleSelectComponet(null)}>Quitar componente</button>
        </div>
    )
}

export default LocalApp