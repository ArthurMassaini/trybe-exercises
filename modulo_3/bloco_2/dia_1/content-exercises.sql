# ------------------------------ Primeiro grupo de exercícios de fixação

SELECT UCASE('trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?' , 'DuckDuckGo', 'Google');

SELECT LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

# ------------------------------ Segundo grupo de exercícios de fixação

USE sakila;

SELECT film_id, title,
	IF (title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Não conheço esse filme')
    AS `conheço o filme?`
FROM film;

SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE "Proibido para menores de idade"
    END AS `público-alvo`
FROM film;

# ------------------------------ Terceiro grupo de exercícios de fixação

SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS `Par ou Ímpar`;

SELECT CONCAT(220 DIV 12, ' grupos') AS `Quantidade`;

SELECT 
IF (220 MOD 12 > 0, 'Sim, temos lugares sobrando', 'Não temos lugares sobrando') AS `Lugares sobrando?`, 
220 MOD 12 AS `Quantidade`; 

# ------------------------------ Quarto grupo de exercícios de fixação

SELECT ROUND(15 + (RAND() * 5));

SELECT ROUND(15.75, 5);

SELECT FLOOR(39.494);

SELECT CONCAT(CEIL(85.234), '%');

# ------------------------------ Quinto grupo de exercícios de fixação

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

SELECT TIMEDIFF('11:00:00', '10:25:45');

# ------------------------------ Sexto grupo de exercícios de fixação

SELECT AVG(length) AS `Média de duração` FROM film;

SELECT MIN(length) AS `Duração Mínima` FROM film;

SELECT MAX(length) AS `Duração Máxima` FROM film;

SELECT SUM(length) AS `Tempo de Exibição Total` FROM film;

SELECT COUNT(length) AS `Filmes Registrados` FROM film;

# ------------------------------ Sétimo grupo de exercícios de fixação

SELECT `active`, COUNT(*) FROM customer
GROUP BY `active`;

SELECT store_id, `active`, COUNT(*) FROM customer
GROUP BY store_id, `active`;

SELECT rating, AVG(length) FROM film
GROUP BY rating
ORDER BY AVG(length) DESC;

SELECT district, COUNT(address) FROM address
GROUP BY district
ORDER BY COUNT(address) DESC;

# ------------------------------ Oitavo grupo de exercícios de fixação

SELECT rating, AVG(length) AS `Media da Duração`
FROM film
GROUP BY rating
HAVING `Media da Duração` BETWEEN 115.0 AND 121.50
ORDER BY `Media da Duração` DESC;

SELECT rating, SUM(replacement_cost) AS `total de substituição de custo`
FROM film
GROUP BY rating
HAVING `total de substituição de custo` > 3950.50
ORDER BY `total de substituição de custo`;








