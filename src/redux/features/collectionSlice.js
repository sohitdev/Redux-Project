import { createSlice } from "@reduxjs/toolkit";

const loadCollection = () => {
  try {
    return JSON.parse(localStorage.getItem("collection")) || [];
  } catch {
    return [];
  }
};

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    items: loadCollection(),
  },
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    // FIXED: clears only items of the given tab type
    clearCollection: (state, action) => {
      state.items = state.items.filter((item) => item.type !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
