DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10, 2),
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);