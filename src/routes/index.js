import express from 'express';
import RecipeController from '../controllers/RecipeController.js';
import {
  addRequestValidator,
  deleteRequestValidator,
  updateRequestValidator,
} from '../validators/RecetteValidator.js';

const router = express.Router();

router.get('/recipes', RecipeController.getAllRecipes);

router.post('/recipes', addRequestValidator, RecipeController.createRecipe);

router.delete(
  '/recipes/:id',
  deleteRequestValidator,
  RecipeController.deleteRecipe
);

router.put(
  '/recipes/:id',
  updateRequestValidator,
  RecipeController.updateRecipe
);

router.get('/recipes/:id', deleteRequestValidator, RecipeController.getByID);

export default router;
