/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    setLoadingStore: (state) => {
      state.loading = true;
    },

    clearLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setLoadingStore, clearLoading } = userSlice.actions;
export default userSlice.reducer;
