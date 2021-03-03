USE hr;


# ------------------------------------------------------- Desafio 1

SELECT * FROM countries;
SELECT * FROM regions;

SELECT c.COUNTRY_NAME AS `País`, 
IF(r.REGION_NAME = 'Europe', 'incluído', 'não incluído') AS `Status Inclusão`
FROM hr.countries AS `c`
INNER JOIN hr.regions AS `r`
ON c.REGION_ID = r.REGION_ID
ORDER BY c.COUNTRY_NAME;

# ------------------------------------------------------- Desafio 2

SELECT * FROM jobs;

SELECT JOB_TITLE AS `Cargo`,
CASE
	WHEN MAX_SALARY BETWEEN 5000 AND 10000 THEN 'Baixo'
    WHEN MAX_SALARY BETWEEN 10001 AND 20000 THEN 'Médio'
    WHEN MAX_SALARY BETWEEN 20001 AND 30000 THEN 'Alto'
    WHEN MAX_SALARY > 30000 THEN 'Altíssimo'
END AS `Nível`
FROM hr.jobs
ORDER BY `Cargo`;

# ------------------------------------------------------- Desafio 3

SELECT * FROM jobs;

SELECT JOB_TITLE AS `Cargo`,
(MAX_SALARY - MIN_SALARY) AS `Diferença entre salários máximo e mínimo`
FROM hr.jobs
ORDER BY `Diferença entre salários máximo e mínimo`, `Cargo`;

# ------------------------------------------------------- Desafio 4

SELECT * FROM employees;
SELECT * FROM jobs;

SELECT j.JOB_TITLE AS `Cargo`,
ROUND(AVG(e.SALARY),2) AS `Média salarial`,
CASE
	WHEN ROUND(AVG(e.SALARY),2) BETWEEN 2000 AND 5800 THEN 'Júnior'
    WHEN ROUND(AVG(e.SALARY),2) BETWEEN 5801 AND 7500 THEN 'Pleno'
    WHEN ROUND(AVG(e.SALARY),2) BETWEEN 7501 AND 10500 THEN 'Sênior'
    WHEN ROUND(AVG(e.SALARY),2) > 10500 THEN 'CEO'
END AS `Senioridade`
FROM hr.jobs AS `j`
INNER JOIN hr.employees AS `e`
ON j.JOB_ID = e.JOB_ID
GROUP BY `Cargo`
ORDER BY `Média salarial`, `Cargo`;

# ------------------------------------------------------- Desafio 5

SELECT * FROM employees;
SELECT * FROM jobs;

SELECT JOB_TITLE AS `Cargo`,
(MAX_SALARY - MIN_SALARY) AS `Variação Salarial`,
ROUND(MIN_SALARY / 12, 2) AS `Média mínima mensal`,
ROUND(MAX_SALARY / 12, 2) AS `Média máxima mensal`
FROM hr.jobs
GROUP BY JOB_ID
ORDER BY `Variação Salarial`, `Cargo`;

# ------------------------------------------------------- Desafio 6

SELECT * FROM jobs; #j
SELECT * FROM job_history; #h
SELECT * FROM employees; #e
SELECT * FROM departments;

SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS `Nome completo`,
j.JOB_TITLE AS `Cargo`,
h.START_DATE AS `Data de início do cargo`,
d.DEPARTMENT_NAME AS `Departamento`
FROM hr.employees AS `e`
INNER JOIN hr.job_history AS `h`
ON e.EMPLOYEE_ID = h.EMPLOYEE_ID
INNER JOIN hr.jobs AS `j`
ON h.JOB_ID = j.JOB_ID
INNER JOIN hr.departments AS `d`
ON h.DEPARTMENT_ID = d.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, `Cargo`;

# ------------------------------------------------------- Desafio 7

SELECT MONTH(END_DATE) FROM job_history;
SELECT * FROM employees; #e

SELECT UCASE(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)) AS `Nome completo`,
h.START_DATE AS `Data de início`,
e.SALARY AS `Salário`
FROM hr.employees AS `e`
INNER JOIN hr.job_history AS `h`
ON e.EMPLOYEE_ID = h.EMPLOYEE_ID
WHERE MONTH(h.START_DATE) IN (1,2,3)
ORDER BY `Nome completo`, `Data de início`;

# ------------------------------------------------------- Desafio 8

USE w3schools;

SELECT * FROM customers; #c
SELECT * FROM orders;
SELECT * FROM shippers;

SELECT c.ContactName AS `Nome de contato`,
s.ShipperName AS `Empresa que fez o envio`,
o.OrderDate AS `Data do pedido`
FROM customers AS `c`
INNER JOIN orders AS `o`
ON c.CustomerID = o.CustomerID
INNER JOIN shippers AS `s`
ON s.ShipperID = o.ShipperID
WHERE s.ShipperName = 'Speedy Express' OR s.ShipperName = 'United Package'
ORDER BY `Nome de contato`, `Empresa que fez o envio`, `Data do pedido`;

# ------------------------------------------------------- Desafio 9

SELECT * FROM orders;

SELECT CONCAT(e.FirstName, ' ', e.LastName) AS `Nome completo`,
COUNT(o.OrderID) AS `Total de pedidos` 
FROM employees AS `e`
INNER JOIN orders AS `o`
ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
ORDER BY `Total de pedidos`;

# ------------------------------------------------------- Desafio 10

SELECT * FROM products;
SELECT * FROM order_details;

SELECT p.ProductName AS `Produto`,
MIN(de.Quantity) AS `Mínima`,
MAX(de.Quantity) AS `Máxima`,
ROUND(AVG(de.Quantity), 2) AS `Média`
FROM w3schools.products AS `p`
INNER JOIN w3schools.order_details AS `de`
ON p.ProductID = de.ProductID
GROUP BY de.ProductID
HAVING `Média` > 20
ORDER BY `Média`, `Produto`;

# ------------------------------------------------------- Desafio 11

SELECT * FROM customers;

SELECT c1.ContactName AS `Nome`,
c1.Country AS `País`,
COUNT(*) AS `Número de compatriotas`
FROM customers AS `c1`, customers AS `c2`
WHERE c1.Country = c2.Country
AND c1.CustomerID <> c2.CustomerID
GROUP BY c1.CustomerID
ORDER BY `Nome`;

# ------------------------------------------------------- Desafio 12

USE hr;

SELECT * FROM employees;

SELECT CONCAT(e1.FIRST_NAME, ' ', e1.LAST_NAME) AS `Nome completo funcionário 1`,
e1.SALARY AS `Salário funcionário 1`,
e1.PHONE_NUMBER AS `Telefone funcionário 1`,
CONCAT(e2.FIRST_NAME, ' ', e2.LAST_NAME) AS `Nome completo funcionário 2`,
e2.SALARY AS `Salário funcionário 2`,
e2.PHONE_NUMBER AS `Telefone funcionário 2`
FROM employees AS `e1`, employees AS `e2`
WHERE e1.JOB_ID = e2.JOB_ID
AND e1.EMPLOYEE_ID <> e2.EMPLOYEE_ID
ORDER BY `Nome completo funcionário 1`, `Nome completo funcionário 2`;


# ------------------------------------------------------- Desafio 13

USE w3schools;

SELECT * FROM products;
SELECT * FROM order_details WHERE Quantity > 80 ORDER BY ProductID;

SELECT ProductName AS `Produto`,
Price AS `Preço`
FROM products AS `p`
INNER JOIN order_details AS `o`
ON p.ProductID = o.ProductID
WHERE o.Quantity > 80
ORDER BY `Produto`;

# ------------------------------------------------------- Desafio 14

SELECT Country AS `País` FROM 
(SELECT DISTINCT(Country) FROM suppliers
UNION
SELECT DISTINCT(Country) FROM customers) AS `País`
ORDER BY Country
LIMIT 5;

# ------------------------------------------------------- Desafio 15

USE hr;
DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN cargo_param VARCHAR(50))
BEGIN
	SELECT ROUND(AVG(e.SALARY), 2) AS `Média salarial`
	FROM employees AS `e`
	INNER JOIN jobs AS `j`
	ON e.JOB_ID = j.JOB_ID
	WHERE j.JOB_TITLE = cargo_param;
END $$

DELIMITER ;

CALL buscar_media_por_cargo('Programmer');

# ------------------------------------------------------- Desafio 16

USE hr; 
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email_param VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidade_de_empregos INT;
		SELECT COUNT(*) AS `total_empregos`
		FROM job_history AS `h`
		INNER JOIN employees AS `e`
		ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
		WHERE e.EMAIL = email_param
        INTO quantidade_de_empregos;
    RETURN quantidade_de_empregos;
END $$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR');

# ------------------------------------------------------- Desafio 17

USE w3schools;

DELIMITER $$
CREATE TRIGGER trigger_orders_insert
    BEFORE INSERT ON orders
    FOR EACH ROW
BEGIN
    SET NEW.OrderDate = NOW();
END $$
DELIMITER ;

SELECT * FROM orders;

# ------------------------------------------------------- Desafio 18

USE hr; 

SELECT * FROM job_history;
SELECT * FROM employees;

SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS `Nome completo`,
CONCAT(
	IF(DAY(h.START_DATE) < 10, 0, ''), 
    DAY(h.START_DATE), '/', 
    IF(MONTH(h.START_DATE) < 10, 0, ''), 
    MONTH(h.START_DATE), '/', 
    YEAR(h.START_DATE)
    ) AS `Data de início`,
CONCAT(
	IF(DAY(h.END_DATE) < 10, 0, ''), 
    DAY(h.END_DATE), '/', 
    IF(MONTH(h.END_DATE) < 10, 0, ''), 
    MONTH(h.END_DATE), '/', 
    YEAR(h.END_DATE)
    ) AS `Data de rescisão`,
ROUND(DATEDIFF(h.END_DATE, h.START_DATE) / 365, 2) AS `Anos trabalhados`
FROM employees AS `e`
INNER JOIN job_history AS `h`
ON e.EMPLOYEE_ID = h.EMPLOYEE_ID
ORDER BY `Nome completo`, `Anos trabalhados`;

# ------------------------------------------------------- Desafio 19

USE hr; 
DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes_param INT, ano_param INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidade_de_pessoas_contratadas INT;
		SELECT COUNT(EMPLOYEE_ID) AS `total`
		FROM employees
		WHERE MONTH(HIRE_DATE) = mes_param
		AND YEAR(HIRE_DATE) = ano_param
        INTO quantidade_de_pessoas_contratadas;
    RETURN quantidade_de_pessoas_contratadas;
END $$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987);

# ------------------------------------------------------- Desafio 20

USE hr;
DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email_param VARCHAR(50))
BEGIN
	SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS `Nome completo`,
	d.DEPARTMENT_NAME AS `Departamento`,
	j.JOB_TITLE AS `Cargo`
	FROM employees AS `e`
	INNER JOIN job_history AS `h`
	ON e.EMPLOYEE_ID = h.EMPLOYEE_ID
	INNER JOIN departments AS `d`
	ON d.DEPARTMENT_ID = h.DEPARTMENT_ID
	INNER JOIN jobs AS `j`
	ON j.JOB_ID = h.JOB_ID
	WHERE e.EMAIL = email_param
	ORDER BY `Departamento`, `Cargo`;
END $$

DELIMITER ;

CALL exibir_historico_completo_por_funcionario('NKOCHHAR');
















