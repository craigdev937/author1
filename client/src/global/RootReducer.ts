import { AuthorAPI } from "./AuthorAPI";
import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        [AuthorAPI.reducerPath]: AuthorAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(AuthorAPI.middleware);
    },
});



