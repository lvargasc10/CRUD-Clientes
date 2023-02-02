CREATE TABLE tipo_documentos(
id bigint(20) NOT NULL AUTO_INCREMENT,
descripcion varchar(50)  NOT NULL,
siglas varchar(50) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE clientes(
id bigint(20) NOT NULL AUTO_INCREMENT,
tipo_documento bigint(8) NOT NULL,
numero_documento varchar(50) UNIQUE NOT NULL,
razon_social varchar(50) DEFAULT NULL,
apellidos varchar(50) DEFAULT NULL,
nombres varchar(50) DEFAULT NULL,
fecha_nacimiento date DEFAULT NULL,
genero varchar(50) DEFAULT NULL,
KEY fk_tdocumento (tipo_documento),
CONSTRAINT fk_tdocumento FOREIGN KEY (tipo_documento) REFERENCES tipo_documentos(id),
PRIMARY KEY(id)
);

INSERT INTO tipo_documentos(descripcion,siglas) VALUES('Cedula de Ciudadania','C.C.');
INSERT INTO tipo_documentos(descripcion,siglas) VALUES('Tarjeta de Identidad','T.I.');

INSERT INTO clientes(tipo_documento,numero_documento, razon_social,apellidos,nombres,fecha_nacimiento,genero) VALUES(1,'106597556',NULL,'Carillo','Jose','1999-02-01','Masculino');
INSERT INTO clientes(tipo_documento,numero_documento, razon_social,apellidos,nombres,fecha_nacimiento,genero) VALUES(2,'619846129',NULL,'Rodriguez','Maria','2000-08-10','Femenino');

SELECT * FROM clientes;
SELECT * FROM tipo_documentos;
SELECT * FROM clientes WHERE numero_documento = '619846129'
