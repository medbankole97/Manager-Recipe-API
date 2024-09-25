// import pool from '../src/config/db.js';
import Recipe from '../src/models/Recipe.js';

describe('Recipe tests', () => {
  it('can be create recipe', async () => {
    const recipe = { titre: 'crepe', type: 'dessert', ingredients: 'farine' };
    const result = await Recipe.createRecipe(
      recipe.titre,
      recipe.ingredients,
      recipe.type
    );

    expect(result).toBe(true);
  });

  it('can be update recipe', async () => {
    const updatedRecipe = {
      titre: 'gâteau',
      type: 'dessert',
      ingredients: 'farine, sucre',
    };

    const updateResult = await Recipe.editRecipe(
      6,
      updatedRecipe.titre,
      updatedRecipe.ingredients,
      updatedRecipe.type
    );

    expect(updateResult).toBe(true);
  });

  it('can get all recipes', async () => {
    const allRecipes = await Recipe.getRecipes();

    expect(allRecipes).not.toBeNull();
    expect(allRecipes.length).toBeGreaterThan(0);
  });

  it('can be delete recipe', async () => {
    const result = await Recipe.delRecipe(8);

    expect(result).toBe(true);
  });
});
