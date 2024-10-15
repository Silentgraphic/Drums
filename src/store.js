import { configureStore } from "@reduxjs/toolkit";
import { drumSlice } from "./slices/drum";

export default configureStore({
    reducer: {
        drumSlice: drumSlice
    }
});