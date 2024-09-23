import Recipe from "../src/models/Recipe.js";

describe("Recipe tests", () => {
  let recipeId = null;

  it("can create recipe", async () => {
    const recipe = {
      titre: "Milshake",
      ingredients: "Lait, Chocolat, sucre",
      type: "Dessert",
    };
    const result = await Recipe.createRecipe(
      recipe.titre,
      recipe.ingredients,
      recipe.type
    );
    recipeId = result.insertId;
    const getById = await Recipe.getRecipeById(recipeId);
    expect(recipeId).not.toBeNull();
    expect(getById).not.toBeNull();
  });

  it("can't create recipe", async () => {
    try {
      const recipe = {
        titre: null,
        ingredients: "Lait, Chocolat, sucre",
        type: "Dessert",
      };
      const result = await Recipe.createRecipe(
        recipe.titre,
        recipe.ingredients,
        recipe.type
      );
      recipeId = result.insertId;
      const getById = await Recipe.getRecipeById(recipeId);
      expect(recipeId).toBeNull();
      expect(getById).toEqual([]);
    } catch (error) {
      console.log(error.message);
    }
  });
});
