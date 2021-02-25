USE Scientists;

SELECT "This is SQL Exercise, Practice and Solution";
SELECT 2,3,4;
SELECT 10+15;
SELECT 10*(5+3);
SELECT * from Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' from Projects;
SELECT Name from Scientists ORDER BY Name;
SELECT Name from Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') from Projects;
SELECT Name, Hours from Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project from AssignedTo;
SELECT Name from Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name from Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * from Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') from Scientists;