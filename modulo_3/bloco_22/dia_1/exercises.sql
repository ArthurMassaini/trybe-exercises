## Criação do banco de dados e tabelas criados no diagrama EER 

CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    sexo CHAR(1) NOT NULL,
    idade INT NOT NULL,
    especie_id INT NOT NULL,
    localizacao_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especie(especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id),
	FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
);

CREATE TABLE especie(
	especie_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(45) NOT NULL
);