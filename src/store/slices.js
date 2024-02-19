import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    level: 3,
    lives: 1,
    easyMode: false,
    losed: false,
    hintProzrenie: 1,
    hintAlohomora: 1,
  },
  reducers: {
    setLevel(state, action) {
      state.level = action.payload.level;
    },
    setMode(state, action) {
      state.easyMode = action.payload.easyMode;
      state.lives = state.easyMode ? 3 : 1;
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
    useProzrenie(state) {
      state.hintProzrenie--;
    },
    useAlohomora(state) {
      state.hintAlohomora--;
    },
    clearStore(state) {
      state.level = 3;
      state.lives = 1;
      state.easyMode = false;
    },
  },
});

export const { setMode, miss, restart, setLevel, clearStore } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
