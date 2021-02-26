USE sakila;
DELIMITER $$

CREATE PROCEDURE Mostra10AtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(film_id) AS `Quantidade de Filmes`
	FROM film_actor
	GROUP BY actor_id
    ORDER BY `Quantidade de Filmes` DESC
    LIMIT 10;
END $$

DELIMITER ;

# -----------------------------------------------------

USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibeInformacoesDoFilmePelaCategoria(IN category_param VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, fi.category_id, category_param
	FROM film AS `f`
	INNER JOIN film_category AS `fi`
	ON f.film_id = fi.film_id
	INNER JOIN category AS `ca`
	ON fi.category_id = ca.category_id
	WHERE ca.`name` = category_param;
END $$

DELIMITER ;

# -----------------------------------------------------

USE sakila;
DELIMITER $$

CREATE PROCEDURE MostraSeEstaAtivoPeloEmail(IN email_in_param VARCHAR(50), OUT activeOrNot_out_param VARCHAR(50))
BEGIN
	SELECT CONCAT('O cliente ', first_name, IF(`active` = 1, ' está ativo', ' não está ativo')) 
    INTO activeOrNot_out_param
	FROM customer
	WHERE email = email_in_param;
END $$

DELIMITER ;
