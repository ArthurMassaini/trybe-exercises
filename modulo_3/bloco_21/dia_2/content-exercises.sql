USE sakila;

#-------------------------------------------- INNER JOIN

SELECT a.actor_id, CONCAT(a.first_name,' ',a.last_name) AS `name`, f.film_id
FROM actor AS `a`
INNER JOIN film_actor AS `f`
ON a.actor_id = f.actor_id;


SELECT s.first_name, s.last_name, a.address
FROM staff AS `s`
INNER JOIN address AS `a`
ON s.address_id = a.address_id;


SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer AS `c`
INNER JOIN address AS `a`
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;


SELECT c.first_name, c.email, a.address_id, a.district
FROM customer AS `c`
INNER JOIN address AS `a`
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE ('%rene%');


SELECT c.first_name, COUNT(a.address)
FROM customer AS `c`
INNER JOIN address AS `a`
ON c.address_id = a.address_id
WHERE c.`active` = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;


SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff AS `s`
INNER JOIN payment AS `p`
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor AS `a`
INNER JOIN film_actor AS `fa`
ON a.actor_id = fa.actor_id
INNER JOIN film AS `f`
ON f.film_id = fa.film_id;

#-------------------------------------------- SELF JOIN

SELECT * FROM film;
SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost  
FROM film AS f1, film AS f2
WHERE f1.replacement_cost = f2.replacement_cost;

SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration
FROM film AS f1, film AS f2
WHERE f1.length = f2.length
AND f1.rental_duration BETWEEN 2 AND 4;

#-------------------------------------------- UNION

SELECT first_name, last_name FROM staff
UNION ALL
SELECT first_name, last_name FROM actor;

SELECT first_name FROM customer
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM actor
WHERE first_name LIKE ('%je%');

SELECT * FROM staff;
SELECT * FROM actor LIMIT 5 OFFSET 195;

(SELECT first_name FROM staff
LIMIT 5 OFFSET 195)
UNION
(SELECT first_name FROM actor
LIMIT 1)
UNION
(SELECT first_name FROM customer
LIMIT 5 OFFSET 15)
ORDER BY first_name;

(SELECT first_name, last_name FROM actor)
UNION ALL
(SELECT first_name, last_name FROM customer)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;

#-------------------------------------------- EXISTS

USE hotel;

SELECT Id, Title
FROM Books AS `b`
WHERE EXISTS (
	SELECT * FROM Books_Lent
    WHERE returned = 1
    AND book_id = b.id
);

SELECT Id, Title
FROM Books AS `b`
WHERE EXISTS (
	SELECT * FROM Books_Lent
    WHERE returned IS FALSE
    AND book_id = b.id
    AND Title LIKE ('%lost%')
);

SELECT `Name`
FROM Customers AS `cu`
WHERE NOT EXISTS (
	SELECT * FROM CarSales
    WHERE CustomerId = cu.CustomerId
);

SELECT cu.`Name`, ca.`Name`
FROM Customers AS `cu`
INNER JOIN Cars AS `ca`
WHERE EXISTS (
	SELECT * FROM CarSales AS `sa`
    WHERE CustomerId = cu.CustomerId
);

