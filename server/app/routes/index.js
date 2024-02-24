import express from "express";
import { ProductRoute } from "./ProductRoute.js";
import { UserRoute } from "./UserRoute.js";

const router = express.Router();

/* GET home page. */
// router.get("/listproduct", function (req, res, next) {
//    res.render("index", { title: "Express" });
// });

router.use("/api/v1/users", UserRoute);
router.use("/api/v1/products", ProductRoute);

export default router;
