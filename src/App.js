
import './App.css';
import React, { useState, useEffect } from 'react';



import Header from "./MyComponent/Header.js";
import { Todo } from "./MyComponent/Todo";
import Footer from "./MyComponent/Footer.js";
import { AddTodo } from './MyComponent/AddTodo';
import { About } from "./MyComponent/About";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }



  const onDelete = (todo) => {
    console.log(todo, " is deleted");

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, disc) => {
    console.log("New title and Description is adding. ");
    console.log("Title : ", title);
    console.log("Description : ", disc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      disc: disc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (

    <>
      <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todo todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
      </Router>
    </>
  );
}

export default App;
