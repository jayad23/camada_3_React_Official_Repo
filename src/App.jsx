import React, { Fragment } from 'react'
import Welcome from "./components/welcome/Welcome"
import ClassComponent from './components/week_2/class_1/ClassComponent'
import FunctionalComponent from './components/week_2/class_1/FunctionalComponent'
import MockComponent from './components/week_2/class_1/MockComponent'

const App = () => {
    const greeting = {
        hello: "Soy componente de clase",
        subText: "Soy el hijo de Class Component"
    }
    return (
        <Fragment>
            <ClassComponent saludo={greeting} />
            <FunctionalComponent />
            <MockComponent message="Soy hijo de App, pero no soy el mismo que el hijo de class" />
        </Fragment>
    )
}

export default App