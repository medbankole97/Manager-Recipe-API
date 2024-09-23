# Gestion Recettes API

Cette API permet de gérer des recettes, y compris leur création, lecture, mise à jour et suppression. 

## Prérequis

- Node.js (version 14 ou supérieure)
- MySQL (ou un autre système de gestion de base de données compatible)
- Postman (pour tester l'API)

## Installation

1. **Clonez le dépôt** :

```bash
    git clone https://github.com/Aichetou-Gaye/Gestion-Recettes-API.git
```

 2. **Acceder au dossier du projet**

 ```bash
   cd Gestion-Recettes-API
```

3. **Installez les dépendances**
   
```bash
   npm install
```
4. **Utilisation**

- Pour démarrer le projet:

```bash
   npm start
```

- Importer la collection (Collection.json) dans postman pour effectuer des tests;

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
  

  ## Auteurs:
  [Aichetou Gaye](https://github.com/Aichetou-Gaye)

  [Mohamed Bankolé](https://github.com/medbankole97)
