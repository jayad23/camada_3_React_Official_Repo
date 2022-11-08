import React, { useState } from 'react'
import Header from './components/header/Header'
import Tasks from './components/tasks/Tasks';
import { data } from "./db";

const done = data.filter(todo => todo.isFinished === true);
const pend = data.filter(todo => todo.isFinished === false);

//ESTE ES EL COMPONENTE PADRE
const Dashboard = () => {
  const [todos, setTodos] = useState(data);
  const [doneTasks, setDoneTasks] = useState(done);
  const [pendingTasks, setPendingTasks] = useState(pend);
  const [selection, setSelection] = useState(null);


  const handleSelection = (param) => {
    setSelection(param);
  };

  const RenderComponent = (value) => {
    switch (value) {
      case "finished":
        return <h1>Terminados</h1>
      case "pending":
        return <h1>Pendientes</h1>
      default:
      case "todos":
        return (
          <Tasks
            title="Lista de todas"
            data={todos}
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