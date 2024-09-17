import express from "express";
import { RecipeController } from "../controllers/RecipeController.js";
import { addRequestValidator, deleteRequestValidator, updateRequestValidator } from "../validators/RecetteValidator.js";

const router = express.Router();

router.get("/allRecipes", RecipeController.getAllRecipes);

router.post("/newRecipe",addRequestValidator, RecipeController.createRecipe);

router.delete("/dropRecipe/:id",deleteRequestValidator, RecipeController.deleteRecipe);

router.put("/editRecipe/:id",updateRequestValidator, RecipeController.updateRecipe);

router.get('/recipe/:id',deleteRequestValidator, RecipeController.getByID);

export { router };
