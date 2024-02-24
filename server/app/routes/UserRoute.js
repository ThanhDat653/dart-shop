import express from "express";
import { createUser, login } from "../controller/userController.js";
var router = express.Router();

/* GET: get users list. */
router.get("/", function (req, res, next) {
   res.send("respond with a resource");
});

/* GET: get user by id. */
router.get("/:id", function (req, res, next) {
   res.send("respond with a user by id");
});

/* POST: create new user */
router.post("/register", createUser);

/* POST: login */
router.post("/login", login);

export { router as UserRoute };
