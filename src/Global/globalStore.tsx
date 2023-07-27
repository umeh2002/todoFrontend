import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null || {},
  toggle: false,
  taskToggle: false,
  stepToggle: false,
};

const globalStore = createSlice({
  name: "second",
  initialState,
  reducers: {
    signInUser: (state: any, { payload }: any) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
    changeToggleFalse: (state: any) => {
      state.toggle = false;
    },

    changeToggleTrue: (state: any) => {
      state.toggle = true;
    },
    changeTaskToggleFalse: (state: any) => {
      state.taskToggle = false;
    },
    changeTaskToggleTrue: (state: any) => {
      state.taskToggle = true;
    },
    changeStepToggleFalse: (state: any) => {
      state.stepToggle = false;
    },
    changeStepToggleTrue: (state: any) => {
      state.stepToggle = true;
    },
  },
});

export const {
  signInUser,
  logOut,
  changeToggleFalse,
  changeToggleTrue,
  changeTaskToggleFalse,
  changeTaskToggleTrue,
  changeStepToggleFalse,
  changeStepToggleTrue,
} = globalStore.actions;

export default globalStore.reducer;
