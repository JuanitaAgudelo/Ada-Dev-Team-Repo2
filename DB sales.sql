CREATE DATABASE ModuloVentas;
USE ModuloVentas;

CREATE TABLE sales(
	id int primary key auto_increment not null,
    cantidad INT,
    valorTotal FLOAT,
    nombreCliente VARCHAR(50)
);

SELECT * FROM sales;