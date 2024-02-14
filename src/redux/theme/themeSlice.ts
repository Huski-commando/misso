import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const theme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
