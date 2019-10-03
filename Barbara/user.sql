DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;
USE users_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS users;

-- Create the users table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR (55) NOT NULL,
    contact_email VARCHAR (55) NOT NULL,
    createdAt DATE, 
    updatedAt DATE,
	PRIMARY KEY (id)
);