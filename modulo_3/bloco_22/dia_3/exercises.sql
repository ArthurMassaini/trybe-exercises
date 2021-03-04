# ------------------------------------------------------ EXERCÍCIOS SOBRE VIEW

USE sakila;

CREATE VIEW film_with_categories AS (
	SELECT f.title, fc.category_id, c.`name`
	FROM film AS `f`
	INNER JOIN film_category AS `fc` ON f.film_id = fc.film_id
	INNER JOIN category AS `c` ON fc.category_id = c.category_id
	ORDER BY f.title
);
SELECT * FROM film_with_categories;

CREATE VIEW film_info AS (
	SELECT a.actor_id,
	CONCAT(a.first_name, ' ', a.last_name) AS `actor`,
	f.title
	FROM actor AS `a`
	INNER JOIN film_actor AS `fa` ON fa.actor_id = a.actor_id
	INNER JOIN film AS `f` ON f.film_id = fa.film_id
	ORDER BY `actor`
);
SELECT * FROM film_info;

CREATE VIEW address_info AS (
	SELECT a.address_id, a.address, a.district, c.city_id, c.city
    FROM address AS `a`
    INNER JOIN city AS `c` ON a.city_id = c.city_id
    ORDER BY c.city
);
SELECT * FROM address_info;

CREATE VIEW movies_languages AS (
	SELECT f.title, l.language_id, l.`name`
	FROM film AS `f`
	INNER JOIN `language` AS `l` ON f.language_id = l.language_id
);
SELECT * FROM movies_languages;

# ------------------------------------------------------ EXERCÍCIOS SOBRE INDEX

USE sakila;

# -------------------------------- 01

CREATE FULLTEXT INDEX index_category ON category(`name`);

SELECT * FROM category
WHERE MATCH(`name`) AGAINST ('Action'); ## Query cost: 0.35

DROP INDEX index_category ON category;

SELECT * FROM category
WHERE `name` LIKE ('Action'); ## Query cost: 1.85

# -------------------------------- 02

CREATE INDEX address_index ON address(postal_code);

SELECT * FROM address
WHERE postal_code = '36693';   ## Query cost: 0.35

DROP INDEX address_index ON address;

SELECT * FROM address
WHERE postal_code = '36693';  ## Query cost: 61.80

# ------------------------------------------------------ EXERCÍCIOS SOBRE ALTER TABLE

USE hr;

SHOW COLUMNS FROM locations; 

ALTER TABLE locations CHANGE STREET_ADDRESS	ADRESS VARCHAR(40);

SHOW COLUMNS FROM regions; 

ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(40);

SHOW COLUMNS FROM countries; 

ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);





    








