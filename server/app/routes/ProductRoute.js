import express from "express";
import { ProductById, Products } from "../controller/productController.js";

var router = express.Router();

/* GET users listing. */
router.get("/", Products);
router.get("/:id", ProductById);

export { router as ProductRoute };
