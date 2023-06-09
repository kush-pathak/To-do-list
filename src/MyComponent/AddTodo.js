
import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !disc) {
      alert("Title or Description can not be Empty !!")
    }
    else {
      addTodo(title, disc);
      setTitle("");
      setDisc("");
    }
  }
  return (
    <div className="container my-3">
      <h3>Add  a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />

        </div>
        <div className="mb-3">
          <label htmlFor="disc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={disc}
            onChange={(e) => {
              setDisc(e.target.value)
            }}
            className="form-control"
            id="disc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
