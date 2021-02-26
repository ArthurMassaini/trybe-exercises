# -------------------------------------- CHAMANDO PROCEDURES

CALL Mostra10AtoresMaisPopulares();

CALL ExibeInformacoesDoFilmePelaCategoria('Action');

CALL MostraSeEstaAtivoPeloEmail('MARY.SMITH@sakilacustomer.org', @activeOrNot);
SELECT @activeOrNot;

# -------------------------------------- CHAMANDO FUNCTIONS

SELECT RetornaQuantidadeTotalDePagementosPelaId(1);

SELECT RetornaNomeDoFilmePelaIdDoInventario(2);

SELECT RetornaQuantidadeTotalDeFilmesDadaACategoria('Action');

# -------------------------------------- TESTANDO TRIGGERS

SELECT * FROM carros;

INSERT INTO carros (preco) VALUES (250000);

SELECT * FROM carros;

UPDATE carros
SET preco = 150000
WHERE id_carro = 1;

SELECT * FROM log_operacoes;

DELETE FROM carros
WHERE id_carro = 2;







