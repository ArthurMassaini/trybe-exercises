USE sakila;

#--------------------------------------------------------- PRIMEIRA PARTE - INSERT

SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, username) VALUES
('Arthur', 'Massaini', 5, 'tutu@gmail.com', 1, 'Tuts'),
('Gabriel', 'Gonçalves', 6, 'gg@gmail.com', 2, 'Biel');

SELECT * FROM actor;
SELECT * FROM customer;
INSERT INTO actor (first_name, last_name) 
	SELECT first_name, last_name FROM customer 
	LIMIT 5;
    
SELECT * FROM category;
INSERT INTO category (name) VALUES
('Porn'), 
('Gore'),
('Adult');

SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id) VALUES
(8,3);

#--------------------------------------------------------- SEGUNDA PARTE - UPDATE
# SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM actor;
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM category;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM film;
UPDATE film
SET rental_rate = 25
WHERE length > 100 
AND rating in ("G", "PG", "PG-13")
AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
CASE 
	WHEN length BETWEEN 0 AND 100 THEN 10 
	WHEN length > 100 THEN 20
END);

#--------------------------------------------------------- TERCEIRA PARTE - DELETE

SELECT * FROM actor WHERE first_name = 'KARL';
DELETE FROM film_actor
WHERE actor_id = 12;
DELETE FROM actor
WHERE first_name = 'KARL';

SELECT * FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM film_actor
WHERE actor_id in (8,103,181);
DELETE FROM actor
WHERE first_name = 'MATTHEW';

SELECT * FROM film_text WHERE description LIKE '%saga%';
DELETE FROM film_text
WHERE description LIKE '%saga%';

TRUNCATE film_actor;
TRUNCATE film_category;



