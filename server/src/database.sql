CREATE DATABASE author1;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE writers(
    wid UUID DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    author VARCHAR(255),
    age SMALLINT,
    info TEXT,
    PRIMARY KEY (wid)
);



