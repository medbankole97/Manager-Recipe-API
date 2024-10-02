drop database if exists gestion_recettes;
create database gestion_recettes;

use gestion_recettes;

create table recettes(
   id int auto_increment,
   titre varchar(50) not null,
   ingredients Text not null,
   type varchar(100) not null,
   constraint pk_recette primary key(id)
);


INSERT INTO recettes (titre, ingredients, type)
VALUES
    ('Salade César', 'laitue romaine, poulet grillé, parmesan, croûtons, sauce César', 'Entrée'),
    ('Gâteau au chocolat', 'chocolat noir, sucre, œufs, farine, levure', 'Dessert'),
    ('Pâtes carbonara', 'spaghetti, lardons, œufs, parmesan, crème', 'Plat'),
    ('Soupe à l\'oignon', 'oignons, bouillon de bœuf, beurre, pain, gruyère râpé', 'Entrée'),
    ('Tarte aux pommes', 'pommes, pâte brisée, sucre, cannelle, beurre', 'Dessert'),
    ('Ratatouille', 'aubergines, courgettes, poivrons, tomates, oignons, ail', 'Plat'),
    ('Poulet rôti', 'poulet, huile d\'olive, herbes de Provence, ail', 'Plat'),
    ('Crêpes', 'farine, œufs, lait, sucre, beurre', 'Dessert'),
    ('Salade niçoise', 'thon, tomates, olives, œufs, haricots verts, anchois', 'Entrée'),
    ('Bœuf bourguignon', 'bœuf, vin rouge, carottes, oignons, champignons, lardons', 'Plat');
