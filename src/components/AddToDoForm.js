import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/todo/todoSlice";
import Button from "../layout/Button";

export default function AddToDoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    if (value) {
      const task = { id: uuidv4(), value, isEditing: false };
      dispatch(addTodo(task));
      setValue("");
    }
  };

  return (
    <div>
      <h1>Add todo</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          className="outline-none shadow focus:shadow-md p-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button text="Add" type="submit" color="green" />
      </form>
    </div>
  );
}
