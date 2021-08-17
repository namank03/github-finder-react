import React from "react";
import "./App.css";
import AddToDoForm from "./components/AddToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div>
      <AddToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
