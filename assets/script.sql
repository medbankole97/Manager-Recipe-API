drop database if exists gestion_recettes;
create database gestion_recettes;

use gestion_recettes;

create table recettes(
   id int auto_increment,
   titre varchar(50) not null,
   ingredients varchar(255) not null,
   type varchar(100) not null,
   constraint pk_recette primary key(id)
);
