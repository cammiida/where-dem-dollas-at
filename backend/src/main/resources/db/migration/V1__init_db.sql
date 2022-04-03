CREATE TABLE bank_account (
     id SERIAL PRIMARY KEY,
     name VARCHAR(150) NOT NULL,
     balance NUMERIC DEFAULT 0
);
