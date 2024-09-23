import { pool } from "../config/db.js";
class Recipe {
  static async checkRecipe(titre) {
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      "select * from recettes where titre = ?",
      [titre]
    );
    return result.length;
  }

  static async getId(id) {
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      "select * from recettes where id = ?",
      [id]
    );
    return result.length;
  }

  static async getRecipeById(id) {
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      "select * from recettes where id = ?",
      [id]
    );
    return result;
  }

  static async getRecipes() {
    const connection = await pool.getConnection();
    const [result] = await connection.execute("select * from recettes");
    return result;
  }

  static async createRecipe(titre, ingredients, type) {
    const connection = await pool.getConnection();
    await connection.execute(
      "INSERT INTO recettes(titre, ingredients, type) VALUES (?, ?, ?)",
      [titre, ingredients, type]
    );
    return true;
  }

  static async delRecipe(id) {
    const connection = await pool.getConnection();
    await connection.execute("delete from recettes where id = ?", [id]);
    return true;
  }
  static async editRecipe(id, titre, ingredients, type) {
    const connection = await pool.getConnection();
    await connection.execute(
      "update recettes set titre = ?, ingredients = ?, type = ? where id = ?",
      [titre, ingredients, type, id]
    );
    return true;
  }
}

export default Recipe;
