import React from 'react'

import { TodoItem } from "./TodoItem";
export const Todo = (props) => {
  let todoStyle = {
    minHeight : "70vh",
    margin : "40px auto"
  }
  return (
    <div className="container" style={todoStyle}>
      <h3 className=" my-3">Todos list</h3>
      {props.todos.length === 0 ? " No Todos to show!!" :
        props.todos.map((todos) => {
          return (
            <TodoItem todos={todos} key={todos.sno} onDelete={props.onDelete} />
          )
        })}



    </div>
  )
}
