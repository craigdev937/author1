import { configureStore } from "@reduxjs/toolkit";
import { AuthorReducer } from "./AuthorSlice";

export const RootReducer = configureStore({
    reducer: {
        authors: AuthorReducer,
    }
});

export type RootState = 
    ReturnType<typeof RootReducer.getState>;
export type AppDispatch =
    typeof RootReducer.dispatch;



    