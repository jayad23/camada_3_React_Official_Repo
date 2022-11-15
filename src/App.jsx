import React, { Fragment, useState } from 'react'
// import Keys from './components/week_2/class_2/Keys'
// import Main from './components/week_2/class_3/Main'
// import LocalApp from './components/week_3/LocalApp'
// import FormComponent from './components/week_3/class_2/FormComponent'
//ACTIVIDAD DE REPASO -- TODOS => import Dashboard from './components/week_4/class_1/Dashboard'
//import Store from './components/week_4/class_3/Store'
import ClassComponent from './components/week_5/class_1/ClassComponent'

const App = () => {
    const [mostrar, setMostrar] = useState(false);
    return (
        <Fragment>
            <h1>Semana 5, class 1</h1>
            <div style={{ border: "5px solid green" }}>
                {
                    mostrar && (
                        <ClassComponent />
                    )
                }
            </div>
            <button onClick={() => setMostrar(!mostrar)}>Mostrar componente</button>
        </Fragment>
    )
}

export default App