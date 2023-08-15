import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRandomItems } from "helpers/getRandomListItems";
import { ItemType } from "types/types";

type State = {
  items: Array<ItemType>;
  removedItems: Array<ItemType>;
};

const initialState: State = {
  items: getRandomItems(),
  removedItems: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<ItemType, "id">>) => {
      const maxId = state.items.reduce(
        (max, item) => Math.max(max, item.id),
        -1
      );
      state.items.push({ ...action.payload, id: maxId + 1 });
    },
    editItem: (state, action: PayloadAction<ItemType>) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    removeItem: (state, action: PayloadAction<ItemType>) => {
      state.removedItems.push(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, editItem, removeItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
