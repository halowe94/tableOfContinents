DROP DATABASE IF EXISTS continentsDB;
CREATE DATABASE continentsDB;

USE continentsDB;

CREATE TABLE emails(
    id INT NOT NULL AUTO_INCREMENT,
    email_address VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);