import React from 'react'
import { TaskContainer, TaskCard, Button, Form, TextField } from "./TaskStyle";

const Tasks = ({ title, data, handleTodos }) => (
  <TaskContainer >
    {
      data.map(todo => (
        <TaskCard key={todo.id}>
          <section style={{ width: "80%" }}>
            <p>{todo.task}</p>
          </section>
          <section style={{ width: "20%" }}>
            <Button bgColor={todo.isFinished} onClick={() => handleTodos(todo)}>{todo.isFinished ? "Hecho" : "Pendiente"}</Button>
          </section>
        </TaskCard>
      ))
    }
  </TaskContainer >
)

export default Tasks