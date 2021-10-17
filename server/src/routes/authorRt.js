import express from "express";
import { CreateAuthor, DeleteAuthor, FetchAllAuthors, 
    GetOneAuthor, UpdateAuthor } from "../controllers/authorCon.js";

export const authorRt = express.Router();
    authorRt.post("/create", CreateAuthor);
    authorRt.get("/fetch", FetchAllAuthors);
    authorRt.get("/getone/:wid", GetOneAuthor);
    authorRt.put("/update/:wid", UpdateAuthor);
    authorRt.delete("/delete/:wid", DeleteAuthor);




