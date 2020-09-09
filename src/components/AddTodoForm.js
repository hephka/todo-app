// src/components/AddTodoForm.js
import React from "react"

const AddTodoForm = (props) => {
    const { addTodo } = props;
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const newTodoText = event.target.elements.todo.value;
      addTodo(newTodoText);
      event.target.reset();
    };
    return (
      <form onSubmit={handleFormSubmit}>
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="todo">
            Ajouter une tâche
          </label>
          <input className="form-control" id="todo" required="" />
        </div>
        <button type="submit" className="btn btn-primary">
          allons-y !
        </button>
      </form>
    );
  };

export default AddTodoForm