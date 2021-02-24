# Content Management System: Employee Tracker

## Walkthrough Video
https://drive.google.com/file/d/1RlTWCcPcA2BJ7yGYISYLlKSI8CVLKDZ2/view


## Description
Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this project, we build a solution for managing a company's employees using node, inquirer, and MySQL. This system has a user-friendly interface, so that the user does not have to know any information on any IDs in database. All the operations are done by selecting in a menu, this greatly reduces the possibility of database error and application crashing. Moreover, the application is designed in a modularization way for easy maintenance in the future. 

## Instructions

Design the following database schema containing three tables:

![Database Schema](Assets/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

