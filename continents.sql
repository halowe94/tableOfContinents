DROP DATABASE IF EXISTS continentsDB;
CREATE DATABASE continentsDB;

USE continentsDB;

CREATE TABLE continents(
  id INT NOT NULL AUTO_INCREMENT,
  names VARCHAR(45) NULL,
  area_km INT (255) NULL,
  pop BIGINT(255) NULL,
  number_countries INT(3) NULL,
  largest_country VARCHAR (45) NULL,
  popular_dish VARCHAR (45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("Africa", "30370000", "1287920000", "54", "Nigeria", "Tajine");

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("Antarctica", "14000000", "4490", "0", "", "Biscuit");

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("Asia", "44579000", "4545133000", "51", "China", "Sushi");

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("Australia", "8600000", "41261000", "3", "Australia", "Pavlova");

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("Europe", "10180000", "742648000", "51", "Russia", "Pizza");

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("North America", "24709000", "587615000", "23", "United States", "Burger");

INSERT INTO continents (names, area_km, pop, number_countries, largest_country, popular_dish)
VALUES ("South America", "17840000", "428240000", "12", "Brazil", "Ceviche");

