import { createStore } from "redux";
import { dateUpdate } from "@redux/reducers/dateupdate";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    selectedDate: dateUpdate,
  },
});


