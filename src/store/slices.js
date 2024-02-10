import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    level: 3,
    lives: 1,
    easyMode: false,
    losed: false,
  },
  reducers: {
    setLevel(state, action) {
      state.level = action.payload.level;
    },
    setMode(state, action) {
      state.easyMode = action.payload.easyMode;
    },
    miss(state) {
      state.lives--;
      if (state.lives < 1) {
        state.losed = true;
      }
    },
    restart(state) {
      state.lives = state.easyMode ? 3 : 1;
      state.losed = false;
    },
  },
});

export const { setMode, miss, restart, setLevel } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
