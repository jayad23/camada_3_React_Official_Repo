import React from 'react'
import { Header, Navbar, ListContainer } from "./headerStyles"

const HeaderComponent = ({ appTitle, handleSelection, todos, done, pending }) => (
  (
    <Header>
      <Navbar>
        <p>{appTitle}</p>
      </Navbar>
      <ListContainer>
        <li onClick={() => handleSelection("todos")}>Todas: {todos.length}</li>
        <li onClick={() => handleSelection("finished")}>Terminadas: {done.length}</li>
        <li onClick={() => handleSelection("pending")}>Pendientes: {pending.length}</li>
      </ListContainer>
    </Header>
  )
)

export default HeaderComponent;