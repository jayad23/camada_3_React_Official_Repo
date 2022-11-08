import React, { useState } from 'react'
import Header from './components/header/Header'
import Tasks from './components/tasks/Tasks';
import { data } from "./db";

// ESTO ES SOLO INICIAL Y NO SE VA A RE-DEFINIR CON EL CAMBIO DE ESTADOS.
const done = data.filter(todo => todo.isFinished === true);
const pend = data.filter(todo => todo.isFinished === false);

//ESTE ES EL COMPONENTE PADRE
const Dashboard = () => {
  const [todos, setTodos] = useState(data);
  const [doneTasks, setDoneTasks] = useState(done);
  const [pendingTasks, setPendingTasks] = useState(pend);
  const [selection, setSelection] = useState(null);

  const handleTodos = (todo) => {
    const taskSelected = todos.map(td => td.id === todo.id ? { ...td, isFinished: !td.isFinished } : td);
    setTodos(taskSelected);
    const tDone = taskSelected.filter(todo => todo.isFinished === true);
    setDoneTasks(tDone);
    const tPending = taskSelected.filter(todo => todo.isFinished === false);
    setPendingTasks(tPending);
  }

  const handleSelection = (param) => {
    setSelection(param);
  };

  const RenderComponent = (value) => {
    switch (value) {
      case "finished":
        return (
          <Tasks
            title="Lista de Terminadas"
            data={doneTasks}
            handleTodos={handleTodos}
          />
        )
      case "pending":
        return (
          <Tasks
            title="Lista de Pendientes"
            data={pendingTasks}
            handleTodos={handleTodos}
          />
        )
      default:
      case "todos":
        return (
          <Tasks
            title="Lista de todas"
            data={todos}
            handleTodos={handleTodos}
          />
        )
    }
  };

  return (
    <div>
      <Header
        appTitle="Todo App"
        handleSelection={handleSelection}
        todos={todos}
        done={doneTasks}
        pending={pendingTasks}
      />
      {RenderComponent(selection)}
    </div>
  )
}

export default Dashboard