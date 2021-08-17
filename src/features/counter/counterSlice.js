/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counterStore",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
});

export const { increment, incrementByAmount, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
