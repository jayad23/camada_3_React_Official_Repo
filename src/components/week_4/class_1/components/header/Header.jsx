import React from 'react'
import { Header, Navbar, ListContainer } from "./headerStyles"

const HeaderComponent = () => (
  (
    <header>
      <nav>
        <p>Nombre de la App</p>
      </nav>
      <ul>
        <li>Todas: 12</li>
        <li>Terminadas: 4</li>
        <li>Pendientes: 8</li>
      </ul>
    </header>
  )
)

export default HeaderComponent;