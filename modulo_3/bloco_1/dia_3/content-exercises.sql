USE sakila;

#--------------------------------------------------- PRIMEIRO EXERCÍCIO

SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year FROM film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC
LIMIT 100;

SELECT COUNT(*) FROM customer
WHERE active IS TRUE
AND store_id = 1;

SELECT * FROM customer 
WHERE active IS FALSE
AND store_id = 1;

SELECT * FROM film
WHERE (rating = 'R' OR rating = 'NC-17')
ORDER BY rental_rate 
LIMIT 50;

#--------------------------------------------------- SEGUNDO EXERCÍCIO

SELECT * FROM film
WHERE title LIKE '%ace%';

SELECT * FROM film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

SELECT * FROM film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

SELECT * FROM film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

SELECT * FROM film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';

#--------------------------------------------------- TERCEIRO EXERCÍCIO

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email;

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6 
ORDER BY rental_duration DESC;

SELECT title, rating FROM film
WHERE rating in ('G', 'PG', 'PG-13')
ORDER BY rating
LIMIT 500;

#--------------------------------------------------- QUARTO EXERCÍCIO

SELECT COUNT(*) FROM rental
WHERE DATE(return_date) = '2005-08-29';

SELECT COUNT(*) FROM rental
WHERE DATE(rental_date) 
BETWEEN '2005-07-01' AND '2005-08-22';

SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM rental
WHERE rental_id = 10330;

SELECT rental_id, DATE(rental_date) FROM rental
WHERE rental_date LIKE ('2005-08-18 00:14:03');


