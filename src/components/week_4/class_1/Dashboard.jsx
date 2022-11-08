import React, { useState } from 'react'
import Header from './components/header/Header'
import Tasks from './components/tasks/Tasks';
import { data } from "./db";
import { TaskContainer, Button, Form, TextField, ErrorMessageLabel } from "./components/tasks/TaskStyle";
const REGEX_STRING = "^[A-Za-z] *";
// ESTO ES SOLO INICIAL Y NO SE VA A RE-DEFINIR CON EL CAMBIO DE ESTADOS.
const done = data.filter(todo => todo.isFinished === true);
const pend = data.filter(todo => todo.isFinished === false);
const regex = new RegExp(REGEX_STRING);
//ESTE ES EL COMPONENTE PADRE
const Dashboard = () => {
  const [todos, setTodos] = useState(data);
  const [doneTasks, setDoneTasks] = useState(done);
  const [pendingTasks, setPendingTasks] = useState(pend);
  const [selection, setSelection] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [error, setError] = useState(null);
  const [id, setId] = useState(data[data.length - 1].id)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: id, task: textFieldValue, isFinished: false };
    setTodos([newTask, ...todos]);
    setTextFieldValue("");
  }

  const handleCleanUpErrorMessage = () => {
    setError(null);
  }

  const handleOnChangeEvent = (value) => {
    setError(null);
    if (value.length > 0 && regex.test(value)) {
      setId(id + 1);
      setTextFieldValue(value);
    } else {
      setTextFieldValue("");
      setError("Este input no acepta números");
    }

  }
  console.log(todos);
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
      <TaskContainer>
        <h1>Lista de {selection === "todos" ? "Todas" : selection === "finished" ? "Terminadas" : "Pendientes"}</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="new_task">Agregar nueva tarea:</label>
          <div>
            <TextField
              id="new_task"
              value={textFieldValue}
              onChange={(e) => handleOnChangeEvent(e.target.value)}
            />
            <Button type="submit">Agregar</Button>
          </div>
          {
            error && (
              <div style={{ display: "flex", gap: "10px" }}>
                <ErrorMessageLabel>{error}</ErrorMessageLabel>
                <Button close onClick={handleCleanUpErrorMessage}>X</Button>
              </div>
            )
          }
        </Form>
      </TaskContainer>
      {RenderComponent(selection)}
    </div>
  )
}

export default Dashboard