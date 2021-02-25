USE faculdade;

SELECT nome from biblioteca;
SELECT COUNT(*) from biblioteca;
SELECT * from biblioteca LIMIT 1000 OFFSET 2;
SELECT * FROM biblioteca ORDER BY ano_lancamento, nome;
SELECT * FROM biblioteca ORDER BY quantidade DESC LIMIT 1;
SELECT * FROM biblioteca ORDER BY vendas DESC LIMIT 4;

