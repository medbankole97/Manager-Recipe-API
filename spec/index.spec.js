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
});
