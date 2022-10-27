import React, { Fragment } from 'react'
import Keys from './components/week_2/class_2/Keys'

const App = () => {
    const greeting = {
        hello: "Soy componente de clase",
        subText: "Soy el hijo de Class Component"
    }
    return <Keys />
}

export default App