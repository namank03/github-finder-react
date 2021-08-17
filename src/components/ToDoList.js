import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function ToDoList() {
  // @ts-ignore
  const todos = useSelector((state) => state.todoStore.todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
