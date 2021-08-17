import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import counterReducer from "../features/counter/counterSlice";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    userStore: userReducer,
    counterStore: counterReducer,
  },
});
