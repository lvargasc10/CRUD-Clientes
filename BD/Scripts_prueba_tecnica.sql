CREATE TABLE tipos_documento(
id bigint(20) NOT NULL AUTO_INCREMENT,
descripcion varchar(50)  NOT NULL,
siglas varchar(50) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE clientes(
id bigint(20) NOT NULL AUTO_INCREMENT,
tipo_documento bigint(20) NOT NULL,
numero_documento varchar(50) UNIQUE NOT NULL,
razon_social varchar(50) DEFAULT NULL,
apellidos varchar(50) DEFAULT NULL,
nombres varchar(50) DEFAULT NULL,
fecha_nacimiento date DEFAULT NULL,
genero varchar(50) DEFAULT NULL,
PRIMARY KEY(id)
);

INSERT INTO tipos_documento(descripcion,siglas) VALUES('Cedula de Ciudadania','C.C.');
INSERT INTO tipos_documento(descripcion,siglas) VALUES('Tarjeta de Identidad','T.I.');

INSERT INTO clientes(tipo_documento,numero_documento, razon_social,apellidos,nombres,fecha_nacimiento,genero) VALUES(1,'106597556',NULL,'Jose','Paramo','1956-06-06','Masculino');
INSERT INTO clientes(tipo_documento,numero_documento, razon_social,apellidos,nombres,fecha_nacimiento,genero) VALUES(2,'619846129',NULL,'Maria','Roso','1994-01-31','Femenino');

SELECT * FROM clientes;
SELECT * FROM tipos_documento