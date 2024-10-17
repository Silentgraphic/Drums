import { configureStore } from "@reduxjs/toolkit";
import drumReducer from "./slices/drum";

export default configureStore({
    reducer: {
        drumList: drumReducer
    }
});