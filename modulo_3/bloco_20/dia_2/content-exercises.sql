USE sakila;
SELECT title, release_year, rating from film;
SELECT DISTINCT last_name from actor;
SELECT COUNT(DISTINCT title) from film;
SELECT COUNT(customer_id) from customer;
SELECT * from country;
SELECT * from language WHERE name != 'english' LIMIT 5;
SELECT * from film;
SELECT title, release_year, length, rating, replacement_cost from film ORDER BY length DESC, replacement_cost LIMIT 20;