import express from "express";
import { ProductById, Products } from "../controller/productController.js";

var router = express.Router();

/* GET users listing. */
router.get("/:id", ProductById);
router.get("/", Products);

export { router as ProductRoute };
