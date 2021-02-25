USE PiecesProviders;

SELECT Code, Name from Providers ORDER BY Name DESC LIMIT 1;
SELECT * from Provides ORDER BY Price DESC LIMIT 5;
SELECT Name, Price from Providers, Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT CONCAT('A peça mais cara é a: ', Pieces.Name, ' provida pela empresa ', Providers.Name, ' e custa ', Price, ' reais.') 
	from Pieces, Providers, Provides ORDER BY Price DESC LIMIT 1;
