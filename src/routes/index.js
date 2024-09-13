import express from "express";
const router = express.Router();
const db = require('./db');

// Get all Recipe
router.get('/recette', (req, res) => {
  db.query('SELECT * FROM recettes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a single recipe by ID
router.get('/recette/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM recettes WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new recipe
router.post('/recette', (req, res) => {
  const {titre, ingredients, type} = req.body;
  db.query('INSERT INTO recettes (titre, ingredients, type) VALUES (?, ?, ?)', [titre, ingredients, type], (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId, titre, ingredients, type});
  });
});

// Update an recipe
router.put('/recette/:id', (req, res) => {
  const { id } = req.params;
  const { titre, ingredients, type} = req.body;
  db.query('UPDATE recettes SET titre = ?, ingredients = ?, type = ? WHERE id = ?', [titre, ingredients, type, id], (err, results) => {
    if (err) throw err;
    res.json({ id, titre, ingredients, type });
  });
});

// Delete an recipe
router.delete('/recette/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM recettes WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Recette deleted' });
  });
});

module.exports = router;
