import express from "express";
import { HomeIndex } from "../controllers/authorCon.js";

export const authorRt = express.Router();
    authorRt.get("/", HomeIndex);




