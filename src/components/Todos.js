// src/components/Todos.js
import React, { useState } from "react"
import Todo from "./Todo"
import AddTodoForm from "./AddTodoForm"
import { v4 as uuidv4 } from "uuid"

const Todos = () => {
  const [todos, setTodos] = useState([])
  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    };
    console.log(newTodo);
    setTodos([...todos, newTodo])
  };

  const deleteTodo = (task) => {
    setTodos(todos.filter((el) => el !== task))
  };

  const toggleCompleteTodo = (task) => {
    setTodos(
      todos.map((el) => {
        return {
          ...el,
          isCompleted: task.id === el.id ? !el.isCompleted : el.isCompleted
        }
      })
    )
  }

  const completedCount = todos.filter((el) => el.isCompleted).length
  return (
    <>
      <h2 className="text-center">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      {todos.map((el) => {
        return (
          <Todo
            key={el.id}
            todo={el}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        )
      })}
      <AddTodoForm addTodo={addTodo} />
    </>
  )
}

export default Todos