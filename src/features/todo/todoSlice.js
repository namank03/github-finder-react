/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: {},
  loading: false,
};

const todoSlice = createSlice({
  name: "todoStore",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false;
    },

    addTodo: (state, { payload }) => {
      state.todos.push(payload);
      state.todo = payload;
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },

    editTask: (state, { payload }) => {
      state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.value = payload.value;
        }
        return todo;
      });
    },

    // setEdit: (state, { payload }) => {
    //   state.todos.map((todo) => {
    //     if (todo.id === payload) {
    //       todo.isEditing = true;
    //     }
    //     return todo;
    //   });
    // },
    // cancelEdit: (state, { payload }) => {
    //   state.todos.map((todo) => {
    //     if (todo.id === payload) {
    //       todo.isEditing = false;
    //     }
    //     return todo;
    //   });
    // },
  },
});

export const { setLoading, clearLoading, addTodo, deleteTodo, editTask } = todoSlice.actions;
export default todoSlice.reducer;
