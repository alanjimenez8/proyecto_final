drop database if exists proyectoFinal;
create database proyectoFinal;
use proyectoFinal;
create table Cascos(
	id int primary key,
    marca varchar(50),
    modelo varchar(50),
    tipo varchar(50),
    certificacion varchar(50),
    descripcion varchar(200),
    precio_aprox double,
    imagen mediumblob,
    fecha_registro date
);
create table Accidentes(
	id int primary key,
    fecha date,
    lugar varchar(60),
    descripcion varchar(500),
    causa varchar(100),
    lesionados tinyint,
    uso_casco varchar(3),
    nivel_gravedad varchar(20),
    imagen_evidencia mediumblob
);
create table Preguntas_frecuentes(
	id int primary key,
    pregunta varchar(100),
    respuesta varchar(500)
);