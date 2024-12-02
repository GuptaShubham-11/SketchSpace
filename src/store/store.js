import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "../features/canvasSlice"

const store = configureStore({
    reducer: {
        canvas: canvasReducer
    }
});

export default store;