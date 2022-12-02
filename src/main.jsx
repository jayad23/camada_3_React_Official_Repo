import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./AppRouter";
import DarkModeProvider from './components/week_6_7/class_2/contex-darkMode/DarkMode';
import './index.css'

//import Index from './components/PARCIAL/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
)
