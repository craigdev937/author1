import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: "test123test456",
    password: "test123test456",
    host: "localhost",
    port: 5432,
    database: "testDatabase"
});




