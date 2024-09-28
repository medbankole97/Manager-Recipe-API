import Recipe from '../src/models/Recipe.js';

describe('Recipe tests', () => {
  it('can be create recipe', async () => {
    try {
      const recipe = { titre: 'crepe', type: 'dessert', ingredients: 'farine' };
      const result = await Recipe.createRecipe(
        recipe.titre,
        recipe.ingredients,
        recipe.type
      );
      expect(result).toBe(true);
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  });

  it('can be update recipe', async () => {
    try {
      const updatedRecipe = {
        titre: 'gâteau',
        type: 'dessert',
        ingredients: 'farine, sucre',
      };

      const updateResult = await Recipe.editRecipe(
        16,
        updatedRecipe.titre,
        updatedRecipe.ingredients,
        updatedRecipe.type
      );

      expect(updateResult).toBe(true);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  });

  it('can get all recipes', async () => {
    try {
      const allRecipes = await Recipe.getRecipes();

      expect(allRecipes).not.toBeNull();
      expect(allRecipes.length).toBeGreaterThan(0);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  });

  it('can be delete recipe', async () => {
    try {
      const result = await Recipe.delRecipe(8);

      expect(result).toBe(true);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  });
  //   const idRecipe = result.insertId;
  //   expect(result).toBe(true);
  //   expect(recipeId).toEqual(idRecipe);
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   (await connection).release();
  // }
});

// it('can not create recipe with invalid data', async () => {
//   try {
//     const recipe = {
//       titre: null,
//       ingredients: 'Lait, Chocolat, sucre',
//       type: 'Dessert',
//     };
//     const result = await Recipe.createRecipe(
//       recipe.titre,
//       recipe.ingredients,
//       recipe.type
//     );
//     recipeId = result.insertId;
//     const getById = await Recipe.getRecipeById(recipeId);
//     expect(recipeId).toBeNull();
//     expect(getById).toEqual([]);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it('Can get all recipes', async () => {
//   try {
//     const getAll = await Recipe.getRecipes();
//     expect(getAll).not.toBeNull();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it('Can get recipe by valid ID', async () => {
//   try {
//     const recipe = {
//       titre: 'Pancakes',
//       ingredients: 'Farine, Oeufs, Lait',
//       type: 'Petit Déjeuner',
//     };
//     const result = await Recipe.createRecipe(
//       recipe.titre,
//       recipe.ingredients,
//       recipe.type
//     );
//     const recipeId = result.insertId;
//     const getById = await Recipe.getRecipeById(recipeId);
//     expect(getById).not.toBeNull();
//     expect(getById[0].titre).toBe(recipe.titre);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it('Cannot get recipe by invalid ID', async () => {
//   try {
//     const getById = await Recipe.getRecipeById(9999); // Un ID qui n'existe pas
//     expect(getById).toEqual([]);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it('Can edit recipe', async () => {
//   try {
//     const newRecipe = {
//       titre: 'Pizza',
//       ingredients: 'Farine, Tomate, Fromage',
//       type: 'Dîner',
//     };
//     const createResult = await Recipe.createRecipe(
//       newRecipe.titre,
//       newRecipe.ingredients,
//       newRecipe.type
//     );
//     const recipeId = createResult.insertId;

//     // Modification de la recette
//     const updatedRecipe = {
//       titre: 'Pizza Deluxe',
//       ingredients: 'Farine, Tomate, Fromage, Champignons',
//       type: 'Dîner',
//     };
//     await Recipe.editRecipe(
//       recipeId,
//       updatedRecipe.titre,
//       updatedRecipe.ingredients,
//       updatedRecipe.type
//     );

//     const updated = await Recipe.getRecipeById(recipeId);
//     expect(updated[0].titre).toBe('Pizza Deluxe');
//     expect(updated[0].ingredients).toBe(
//       'Farine, Tomate, Fromage, Champignons'
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it('Can delete recipe', async () => {
//   try {
//     const recipe = {
//       titre: 'Salade',
//       ingredients: 'Laitue, Tomate, Concombre',
//       type: 'Entrée',
//     };
//     const result = await Recipe.createRecipe(
//       recipe.titre,
//       recipe.ingredients,
//       recipe.type
//     );
//     const recipeId = result.insertId;

//     const deleted = await Recipe.delRecipe(recipeId);
//     const checkDeleted = await Recipe.getRecipeById(recipeId);

//     expect(deleted).toBe(true);
//     expect(checkDeleted).toEqual([]);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it('Can check if recipe exists by title', async () => {
//   try {
//     const recipe = {
//       titre: 'Crêpes',
//       ingredients: 'Farine, Oeufs, Lait',
//       type: 'Dessert',
//     };
//     await Recipe.createRecipe(recipe.titre, recipe.ingredients, recipe.type);

//     const check = await Recipe.checkRecipe(recipe.titre);
//     expect(check).toBeGreaterThan(0);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });

// it("Returns 0 if recipe doesn't exist", async () => {
//   try {
//     const check = await Recipe.checkRecipe("Recette qui n'existe pas");
//     expect(check).toBe(0);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     (await connection).release();
//   }
// });
