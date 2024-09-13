import express from "express";
import bodyParser from "body-parser";
import { query, validationResult } from 'express-validator';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Hello World");
  });

app.listen(port, () => {
    console.log(`Successfully connected on ${port}`);
});