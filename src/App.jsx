import React, { Fragment, useState } from 'react'
// import Keys from './components/week_2/class_2/Keys'
// import Main from './components/week_2/class_3/Main'
// import LocalApp from './components/week_3/LocalApp'
// import FormComponent from './components/week_3/class_2/FormComponent'
//ACTIVIDAD DE REPASO -- TODOS => import Dashboard from './components/week_4/class_1/Dashboard'
//import Store from './components/week_4/class_3/Store'
import CiclosEnClase from './components/week_5/CiclosEnClase'
import CiclosEnFn from './components/week_5/CiclosEnFn';

const App = () => {
    const [showComponent, setShowComponent] = useState(true);
    return (
        <Fragment>
            <h1>Títlo de Componente padre: APP</h1>
            <div style={{ border: "10px solid green", padding: "20px" }}>
                {
                    showComponent && (
                        <CiclosEnFn />
                    )
                }
            </div>
            <button onClick={() => setShowComponent(!showComponent)}>Toggle Show Component</button>
        </Fragment>
    )
}

export default App