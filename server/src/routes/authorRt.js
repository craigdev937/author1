import express from "express";
import { CreateAuthor, FetchAllAuthors, GetOneAuthor, 
    UpdateAuthor, DeleteAuthor } from "../controllers/authorCon.js";

export const authorRt = express.Router();
    authorRt.post("/author", CreateAuthor);
    authorRt.get("/author", FetchAllAuthors);
    authorRt.get("/author/:wid", GetOneAuthor);
    authorRt.put("/author/:wid", UpdateAuthor);
    authorRt.delete("/author/:wid", DeleteAuthor);




