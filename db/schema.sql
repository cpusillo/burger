CREATE DATABASE  burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id integer auto_increment not null,
    burger_name varchar(100),
    devoured boolean default false
)