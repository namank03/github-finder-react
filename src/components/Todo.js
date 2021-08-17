import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTask } from "../features/todo/todoSlice";

import Button from "../layout/Button";

export default function Todo({ id, value }) {
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState("");
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const onEditTask = (e) => {
    e.preventDefault();

    if (editVal !== "") {
      dispatch(editTask({ id, value: editVal }));
      setEditing(false);
    }
  };

  return (
    <div className="mt-4">
      <div className={`container mx-auto shadow hover:shadow-lg ${completed && "bg-green-100"}`}>
        <div className="flex flex-row justify-between items-center p-4">
          {!editing ? (
            <div className="flex flex-row">
              <h1 className="mr-3">{value}</h1>
            </div>
          ) : (
            <form onSubmit={onEditTask}>
              <input
                type="text"
                className="border-2 border-gray-800 p-2 outline-none rounded mr-3"
                onChange={(e) => setEditVal(e.target.value)}
                value={editVal}
              />
              <Button text="Save" color="green" type="submit" />
            </form>
          )}
          <div>
            {!editing ? (
              <>
                <Button text="Mark Completed" func={() => setCompleted(true)} />

                <Button
                  func={() => {
                    setEditing(true);
                    setCompleted(false);
                  }}
                  text="Edit"
                />
              </>
            ) : (
              <Button func={() => setEditing(false)} text="Cancel" color="red" />
            )}
            <Button func={() => dispatch(deleteTodo(id))} text="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
