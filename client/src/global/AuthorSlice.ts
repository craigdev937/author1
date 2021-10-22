import { createSlice, PayloadAction, 
    nanoid } from "@reduxjs/toolkit";
import { IAuthor } from "../models/Authors";
import { addAuthorAsync, deleteAuthorAsync, fetchAuthorsAsync, updateAuthorAsync } from "./FetchAPI";

const initialState: IAuthor[] = [];
const AuthorSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {
        addAuthor: (state, action: PayloadAction<{
            title: string, author: string, 
            age: number, info: string,
        }>) => {
            const newAuthor = {
                wid: nanoid(),
                title: action.payload.title,
                author: action.payload.author,
                age: action.payload.age,
                info: action.payload.info,
            };
            state.push(newAuthor);
        },
        updateAuthor: (state, action: PayloadAction<{
            title: string, author: string, age: number, info: string, wid: string
        }>) => {
            const index = state.findIndex(
                (author) => author.wid === action.payload.wid)
            state[index].title = action.payload.title;
            state[index].author = action.payload.author;
            state[index].age = action.payload.age;
            state[index].info = action.payload.info;
        },
        deleteAuthor: (state, action: PayloadAction<{
            wid: string
        }>) => {
            return state.filter((author) => 
                author.wid !== action.payload.wid)
        },
    },
    extraReducers: {
        [fetchAuthorsAsync.pending.toString()]: (state, action) => {
            console.log("Fetching data...");
        },
        [fetchAuthorsAsync.fulfilled.toString()]: (state, action): IAuthor => {
            console.log("Fetch Successfull!");
            return action.authors;
        },
        [addAuthorAsync.fulfilled.toString()]: (state, action: PayloadAction<{
            title: string, author: string, age: number, info: string, wid: string
        }>) => {
            state.push(action.payload);
        },
        [updateAuthorAsync.fulfilled.toString()]: (state, action: PayloadAction<{
            title: string, author: string, age: number, info: string, wid: string
        }>) => {
            const index = state.findIndex((author) => author.wid === action.payload.wid);
            state[index].title = action.payload.title;
            state[index].author = action.payload.author;
            state[index].age = action.payload.age;
            state[index].info = action.payload.info;
        },
        [deleteAuthorAsync.fulfilled.toString()]: (state, action) => {
            return state.filter((author) => author.wid !== action.payload.wid);
        },
    }
});

export const { addAuthor, updateAuthor, deleteAuthor } = AuthorSlice.actions;
export const AuthorReducer = AuthorSlice.reducer;





