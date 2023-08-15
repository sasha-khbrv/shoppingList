import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "./reducers/shoppingList";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { shoppingList: shoppingListReducer },
  middleware: [saga],
});

export default store;
