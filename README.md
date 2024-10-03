# Gestion Recettes API

Cette API permet de gérer des recettes, y compris leur création, lecture, mise à jour et suppression. 

## Prérequis

- Node.js (version 14 ou supérieure)
- MySQL (ou un autre système de gestion de base de données compatible)
- Postman (pour tester l'API)

## Installation

1. **Clonez le dépôt** :

```bash
    git clone https://github.com/medbankole97/Manager-Recipe-API.git
```

2.  **Acceder au dossier du projet**

```bash
  cd Manager-Recipe-API.git
```

3. **Installez les dépendances**

```bash
   npm install
```
**Configuration de la base de données**
- Assurer-vous que Mysql est en cours d'exécution sur votre machine.
- Céer une base de données pour le projet.
- Modifier le fichier .en.exemple en le nommant `.env` pour inserer le informations de connexion à la base de données.
  
  **Exemple Fichier** `.env`:
  ```bash
    DB_HOST = localhost
    DB_NAME = gestion_recettes
    DB_USER = User
    DB_PASSWORD = password
    DB_ROOT_PASSWORD = password
    DB_PORT = 3308

    NODE_LOCAL_PORT = 3020

    MYSQL_ROOT_PASSWORD = password
    MYSQL_DATABASE = gestion_recettes
  ```


1. **Utilisation**

- Pour démarrer le projet:

```bash
   npm start
```


**La base de données est sous le nom de : `script.sql` situé dans la racine**

**La collection postman exportée : `Gestion-Recette.json` dans la racine**
## Endpoints API

 **Récupérer toutes les recettes**

- URL : /recipes
- Méthode : GET

```
[
    {
        "id": 1,
        "titre": "Recette 1",
        "ingredients": "Ingrédients de la recette 1",
        "type": "Entrée"
    },
    
]
```

**Créer une nouvelle recette**
- URL : /recipes
- Méthode : POST

```
{
    "titre": "Nouvelle Recette",
    "ingredients": "Ingrédients de la nouvelle recette",
    "type": "Plat principal"
}
```
- Réponse: `"Added successfully"`


 **Mettre à jour une recette**
- URL : /recipes/:id
- Méthode : PUT
 ```
 {
    "titre": "Recette Modifiée",
    "ingredients": "Ingrédients de la recette modifiée",
    "type": "Dessert"
   }
```
- Réponse: `"Updated successfully"`
  
 
 **Supprimer une recette**
- URL : /recipes/:id
- Méthode : DELETE
  
 - Réponse:  `"Deleted successfully"`
  

### Pour le test unitaire

- dans le fichier `.env` vous devez avoir **DB_HOST = localhost** avant de faire les tests
```bash
npm test
```

**Eslint**
```bash
npm run lint
```

**Prettier**
```bash
npm run Format
```

### Pour les conteneurs:
- dans le fichier `.env` remplacer DB_HOST = localhost par  **DB_HOST = db**
```bash
docker-compose up -d
```
## Auteurs:
 
  [Mohamed Bankolé](https://github.com/medbankole97)
