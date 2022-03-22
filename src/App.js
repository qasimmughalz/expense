import "./App.css";
import React, { useReducer, useState, useContext } from "react";
import { GlobalContext } from "./MyContext";
import Mycontext from "./MyContext";
import AddTodo from "./Components/AddTodo";
import { Todolist } from "./Components/TodoList";
import { CheckReducer } from "./ChcekReducer";
  
function App() {

  return (
    <div className="App container text-center">
      <div className="col-md-3 m-auto  p-3 main">
        <CheckReducer></CheckReducer>
      <Mycontext>
         <h3 className="display-4"> App</h3>
        <Todolist></Todolist>
        <AddTodo></AddTodo>

      </Mycontext>
    </div>
    </div>
  );
}
export default App;
