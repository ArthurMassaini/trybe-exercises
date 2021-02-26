USE sakila; 
DELIMITER $$

CREATE FUNCTION RetornaQuantidadeTotalDePagementosPelaId(id_param INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE qtd_total_pagamentos INT;
		SELECT COUNT(payment_id) 
		FROM payment
		WHERE customer_id = id_param
		INTO qtd_total_pagamentos;	
    RETURN qtd_total_pagamentos;
END $$

DELIMITER ;

# -----------------------------------------------------
DROP FUNCTION RetornaNomeDoFilmePelaIdDoInventario;
 
USE sakila; 
DELIMITER $$

CREATE FUNCTION RetornaNomeDoFilmePelaIdDoInventario(id_param INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE nome_do_filme VARCHAR(50);
		SELECT f.title
		FROM film AS `f`
		INNER JOIN inventory AS `i`
		ON f.film_id = i.film_id
		WHERE i.inventory_id = id_param
        INTO nome_do_filme;
    RETURN nome_do_filme;
END $$

DELIMITER ;

# -----------------------------------------------------

USE sakila; 
DELIMITER $$

CREATE FUNCTION RetornaQuantidadeTotalDeFilmesDadaACategoria(category_param VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidade_de_filmes INT;
		SELECT COUNT(f.film_id)
		FROM film_category AS `f`
		INNER JOIN category AS `c`
		ON f.category_id = c.category_id
		WHERE c.`name` = category_param
        INTO quantidade_de_filmes;
    RETURN quantidade_de_filmes;
END $$

DELIMITER ;

