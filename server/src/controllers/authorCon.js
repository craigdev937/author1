import { pool } from "../config/database.js";

export const CreateAuthor = async (req, res, next) => {
    try {
        const { title, author, age, info } = req.body;
        const createQuery = `INSERT INTO writers
        (title, author, age, info) 
        VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [title, author, age, info];
        const newAuthor = await pool.query(createQuery, values);
        res.json(newAuthor.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next();
    }
};

export const FetchAllAuthors = async (req, res, next) => {
    try {
        const fetchAllQuery = "SELECT * FROM writers";
        const allAuthors = await pool.query(fetchAllQuery);
        res.json(allAuthors.rows);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next();
    }
};

export const GetOneAuthor = async (req, res, next) => {
    try {
        const { wid } = req.params;
        const GetOneAuthor = `
            SELECT * FROM writers 
            WHERE wid = $1
        `;
        const values = [wid];
        const author = await pool.query(GetOneAuthor, values);
        res.json(author.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next();
    }
};

export const UpdateAuthor = async (req, res, next) => {
    try {
        const { wid } = req.params;
        const { title, author, age, info } = req.body;
        const updateQry = `UPDATE writers 
        SET title = $1, author = $2, age = $3, info = $4
        WHERE wid = $5 RETURNING *`;
        const values = [title, author, age, info, wid];
        const updateAuthor = await pool.query(updateQry, values);
        res.status(201).json("The Author was Updated!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next();
    }
};

export const DeleteAuthor = async (req, res, next) => {
    try {
        const { wid } = req.params;
        const deleteQry = "DELETE FROM writers WHERE wid = $1";
        const values = [wid];
        const deleteAuthor = await pool.query(deleteQry, values);
        res.status(200).json("The Author was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next();
    }
};





