USE world;

# 1. (tabela city) Usando o CountryCode, mostre a média populacional por país. E arredonde o valor para o mais próximo.

SELECT CountryCode, ROUND(AVG(Population)) AS `Média Populacional Arredondada`
FROM city
GROUP BY CountryCode;

# 2. (tabela city) Usando o CountryCode, mostre a população máxima por país.

SELECT CountryCode, MAX(Population) AS `População Máxima`
FROM city
GROUP BY CountryCode;

# 3. (tabela city) Usando o CountryCode, mostre a população mínima por país.

SELECT CountryCode, MIN(Population) AS `População Mínima`
FROM city
GROUP BY CountryCode;

# 4. (tabela country) Faça um agrupamento pelo continente, e mostre quantos países tem em cada um, e ordene 
# do mais populoso para o menos populoso.

SELECT Continent, COUNT(`Name`) AS `Quantidade de países` 
FROM country
GROUP BY Continent
ORDER BY `Quantidade de países` DESC;

# 5. (tabela countrylanguage) Usando a coluna CountryCode, mostre a quantidade de línguas faladas em cada país, 
# mas filtre apenas pelos países que falem pelo menos 10 línguas

SELECT CountryCode, COUNT(`Language`) AS `Quantidade de línguas`
FROM countrylanguage
GROUP BY CountryCode
HAVING `Quantidade de línguas` >= 10
ORDER BY `Quantidade de línguas`;

