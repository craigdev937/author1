import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthor } from "../models/Authors";
const URL = "http://localhost:9000/api/author";

export const fetchAuthorsAsync =
createAsyncThunk("authors/fetchAuthorsAsync", 
async () => {
    try {
        const res: Response = await fetch(URL);
        const authors: IAuthor[] = await res.json();
        return { authors: authors }
    } catch (error) {
        console.log(error);
    }
});

export const getOneAuthorAsync = 
createAsyncThunk("authors/getOneAuthorAsync", 
async (payload: IAuthor) => {
    try {
        const res: Response = await fetch(`${URL}/${payload.wid}`);
        const author: IAuthor = await res.json();
        return { author: author };
    } catch (error) {
        console.log(error);
    }
});

export const addAuthorAsync =
createAsyncThunk("authors/addAuthorAsync", 
async (payload: IAuthor) => {
    try {
        const res: Response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title,
                author: payload.author,
                age: payload.age,
                info: payload.info
            }),
        });
        const author: IAuthor = await res.json();
        return { author: author };
    } catch (error) {
        console.log(error);
    }
});

export const updateAuthorAsync =
createAsyncThunk("authors/updateAuthorAsync", 
async (payload: IAuthor) => {
    try {
        const res: Response = await fetch(`${URL}/${payload.wid}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, author: payload.author,
                age: payload.age, info: payload.info
            }),
        });
        const author: IAuthor = await res.json();
        return {
            wid: author.wid, title: author.title, age: author.age,
            author: author.author, info: author.info
        }
    } catch (error) {
        console.log(error);
    }
});

export const deleteAuthorAsync =
createAsyncThunk("authors/deleteAuthorAsync", 
async (payload: IAuthor) => {
    try {
        const res = await fetch(`${URL}/${payload.wid}`, {
            method: "DELETE",
        });
        const author: IAuthor = await res.json();
        return { author: author }
    } catch (error) {
        console.log(error);
    }
});





