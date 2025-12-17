drop database if exists proyectoFinal;
create database proyectoFinal;
use proyectoFinal;
create table Cascos(
	id int primary key,
    modelo varchar(50),
    tipo varchar(50),
    certificacion varchar(100)
);
create table Accidentes(
	id int primary key,
    fecha date,
    lugar varchar(60),
    descripcion varchar(500),
    imagen_evidencia mediumblob
);
create table Preguntas_frecuentes(
	id int primary key,
    pregunta varchar(100),
    respuesta varchar(500)
);
create table Usuarios(
	id int primary key,
    nombre varchar(50),
    contraseña varchar(20),
    Administrador boolean
);
insert into Usuarios values (1, 'Alan', '1234', true);