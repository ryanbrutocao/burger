CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
 (
  id int AUTO_INCREMENT,
  PRIMARY KEY (id),
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false
);


INSERT INTO burgers (burger_name) VALUES ('Whopper');

INSERT INTO burgers (burger_name) VALUES ('Big Mac');

INSERT INTO burgers (burger_name) VALUES ('4 by 4');



