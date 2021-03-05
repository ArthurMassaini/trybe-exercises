USE SpotifyClone;

# ---------------------------------------- DESAFIO 02

SELECT * FROM cancao;
SELECT * FROM artista;
SELECT * FROM album;

CREATE VIEW estatisticas_musicais AS (
	SELECT * FROM
	(SELECT COUNT(nome_cancao) AS `cancoes` FROM cancao) AS `cancoes`,
	(SELECT COUNT(nome_artista) AS `artistas` FROM artista)  AS `artistas`,
	(SELECT COUNT(nome_album) AS `albuns` FROM album) AS `albuns`
);
SELECT * FROM estatisticas_musicais;

# ---------------------------------------- DESAFIO 03


SELECT * FROM usuario;
SELECT * FROM historico;
SELECT * FROM cancao;

CREATE VIEW historico_reproducao_usuarios AS(
	SELECT u.nome_usuario AS `usuario`,
	c.nome_cancao AS `nome`
	FROM usuario AS `u`
	INNER JOIN historico AS `h` 
	ON u.usuario_id = h.usuario_id
	INNER JOIN cancao AS `c`
	ON h.cancao_id = c.cancao_id
	ORDER BY `usuario`, `nome`
);
SELECT * FROM historico_reproducao_usuarios;

# ---------------------------------------- DESAFIO 04

SELECT * from artista;
SELECT * FROM usuario_artista;

CREATE VIEW top_3_artistas AS (
	SELECT CONCAT(a.nome_artista,' ', a.sobrenome_artista) AS `artista`,
	COUNT(u.usuario_id) AS `seguidores`
	FROM artista AS `a`
	INNER JOIN usuario_artista AS `u`
	ON a.artista_id = u.artista_id
	GROUP BY u.artista_id
	ORDER BY `seguidores` DESC, `artista`
	LIMIT 3
);
SELECT * FROM top_3_artistas;

# ---------------------------------------- DESAFIO 05

SELECT * FROM cancao;
SELECT * FROM historico;


CREATE VIEW top_2_hits_do_momento AS (
	SELECT c.nome_cancao AS `cancao`,
	COUNT(h.cancao_id) AS `reproducoes`
	FROM cancao AS `c`
	INNER JOIN historico AS `h` ON c.cancao_id = h.cancao_id
	GROUP BY c.nome_cancao
	ORDER BY `reproducoes` DESC, `cancao`
	LIMIT 2
);
SELECT * FROM top_2_hits_do_momento;

# ---------------------------------------- DESAFIO 06

SELECT * FROM plano;
SELECT * FROM usuario;

CREATE VIEW faturamento_atual AS (
	SELECT MIN(p.valor_plano) AS `faturamento_minimo`,
	MAX(p.valor_plano) AS `faturamento_maximo`,
	ROUND(AVG(p.valor_plano),2) AS `faturamento_medio`,
	SUM(p.valor_plano) AS `faturamento_total`
	FROM plano AS `p`
	INNER JOIN usuario AS `u` ON u.plano_id = p.plano_id
);
SELECT * FROM faturamento_atual;

# ---------------------------------------- DESAFIO 07

SELECT * FROM artista;
SELECT * FROM album;
SELECT * FROM usuario_artista;

CREATE VIEW perfil_artistas AS (
	SELECT CONCAT(a.nome_artista, ' ', a.sobrenome_artista) AS `artista`,
	al.nome_album AS `album`,
	COUNT(u.usuario_id) AS `seguidores`
	FROM artista AS `a`
	INNER JOIN album AS `al` ON a.artista_id = al.artista_id
	INNER JOIN usuario_artista AS `u` ON a.artista_id = u.artista_id
	GROUP BY u.artista_id, al.nome_album
	ORDER BY `seguidores` DESC, `artista`, `album`
);
SELECT * FROM perfil_artistas;

# ---------------------------------------- DESAFIO 08

USE SpotifyClone;

DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
    BEFORE DELETE ON usuario
    FOR EACH ROW
BEGIN
	DELETE FROM historico
    WHERE usuario_id = OLD.usuario_id;
    DELETE FROM usuario_artista
    WHERE usuario_id = OLD.usuario_id;
END $$
DELIMITER ;

DELETE FROM usuario
WHERE nome_usuario = 'Thati';

# ---------------------------------------- DESAFIO 09

USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN nome_param VARCHAR(50))
BEGIN
	SELECT CONCAT(a.nome_artista, ' ', a.sobrenome_artista) AS `artista`,
	b.nome_album AS `album`
	FROM artista AS `a`
	INNER JOIN album AS `b` ON a.artista_id = b.artista_id
    WHERE CONCAT(a.nome_artista, ' ', a.sobrenome_artista)  = nome_param
	ORDER BY `album`;
END $$

DELIMITER ;

CALL albuns_do_artista('Walter Phoenix');

# ---------------------------------------- DESAFIO 10

USE SpotifyClone; 
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(nome_param VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE qtd_musicas INT;
		SELECT COUNT(*)
		FROM historico AS `h`
		INNER JOIN usuario AS `u` ON h.usuario_id = u.usuario_id
		WHERE u.nome_usuario = 'Bill'
		GROUP BY h.usuario_id
		INTO qtd_musicas;	
    RETURN qtd_musicas;
END $$

DELIMITER ;

SELECT quantidade_musicas_no_historico('Bill');

# ---------------------------------------- DESAFIO 11

SELECT * FROM cancao; #c
SELECT * FROM historico; #h 
SELECT * FROM usuario;
SELECT * FROm plano;

CREATE VIEW cancoes_premium AS(
	SELECT c.nome_cancao AS `nome`,
	COUNT(h.cancao_id) AS `reproducoes`
	FROM cancao AS `c`
	INNER JOIN historico AS `h` ON c.cancao_id = h.cancao_id
	INNER JOIN usuario AS `u` ON h.usuario_id = u.usuario_id
	INNER JOIN plano AS `p` ON p.plano_id = u.plano_id
	WHERE p.nome_plano IN ('familiar','universitário')
	GROUP BY c.nome_cancao
	ORDER BY `nome`
);

SELECT * FROM cancoes_premium;

























