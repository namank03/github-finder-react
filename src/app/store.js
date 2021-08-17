import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    userStore: userReducer,
    counterStore: counterReducer,
    todoStore: todoReducer,
  },
});
