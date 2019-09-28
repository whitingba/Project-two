DROP DATABASE IF EXISTS crud_db;
CREATE DATABASE crud_db;

USE crud_db;

CREATE TABLE tasks
(
    id INT NOT NULL
    AUTO_INCREMENT,
    task VARCHAR
    (155) NOT NULL,
    frequency VARCHAR
    (20) NOT NULL,
    primary KEY
    (id)
);