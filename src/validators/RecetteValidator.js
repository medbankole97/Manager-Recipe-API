import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { Recipe } from "../models/Recipe.js";

const addRequestValidator = [
  check("titre")
    .notEmpty()
    .withMessage("Titre ne peut pas être vide!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Minimum 6 caractères requis!")
    .bail()
    .custom(async (value, { req }) => {
      const result = await Recipe.checkRecipe(value);
      if (result !== 0) {
        throw new Error("Cette recette existe déjà!");
      }
      return true;
    }),
  check("ingredients")
    .notEmpty()
    .withMessage("Ingredients ne peut pas être vide!")
    .bail()
    .isLength({ min: 10, max: 50 })
    .withMessage("Entre 10 et 50 caractères!")
    .bail(),
  check("type")
    .notEmpty()
    .withMessage("Type ne peut pas être vide!")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Minimum 4 caractères requis!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id est obligatoire!")
    .bail()
    .custom(async (value, { req }) => {
      const result = await Recipe.getRecipeById(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const updateRequestValidator = [
  param("id")
    .notEmpty()
    .withMessage("Id est requis!")
    .bail()
    .custom(async (value, { req }) => {
      const result = await Recipe.getId(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  check("titre")
    .notEmpty()
    .withMessage("Titre ne doit pas être vide")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Minimum 6 caractères requis!")
    .bail()
    .custom(async (value, { req }) => {
      const result = await Recipe.checkRecipe(value);
      if (result !== 0) {
        throw new Error("Cette recette existe déjà!");
      }
      return true;
    }),
  check("ingredients")
    .notEmpty()
    .withMessage("Ingredients ne peut pas être vide!")
    .bail()
    .isLength({ min: 10, max: 50 })
    .withMessage("Entre 10 et 50 caractères!")
    .bail(),
  check("type")
    .notEmpty()
    .withMessage("Type ne peut pas être vide!")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Minimum 4 caractères requis!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

export { addRequestValidator, deleteRequestValidator, updateRequestValidator };
